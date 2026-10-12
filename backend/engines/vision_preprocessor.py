"""
NetraShiksha AI - Computer Vision Preprocessor Engine
Performs blackboard/whiteboard classification, glare suppression, adaptive contrast enhancement,
and multi-ROI bounding box segmentation for text, mathematical formulas, and scientific diagrams.
"""

import cv2
import numpy as np
import base64
import io
from PIL import Image

class BoardVisionPreprocessor:
    def __init__(self):
        pass

    def detect_board_type(self, bgr_img: np.ndarray) -> dict:
        """Classify board type based on HSV and RGB color space statistics."""
        hsv = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2HSV)
        h, s, v = cv2.split(hsv)
        mean_v = np.mean(v)
        mean_s = np.mean(s)
        mean_h = np.mean(h)

        # Green chalkboard check: green hue (35-85), high saturation, medium-low value
        green_mask = cv2.inRange(hsv, (35, 40, 20), (85, 255, 200))
        green_ratio = np.count_nonzero(green_mask) / (bgr_img.shape[0] * bgr_img.shape[1])

        if green_ratio > 0.35:
            return {
                "type": "chalkboard_green",
                "label": "Classroom Green Chalkboard",
                "contrast_recommendation": "Invert & CLAHE enhance for low-vision readability",
                "is_dark_background": True
            }
        elif mean_v < 80:
            return {
                "type": "chalkboard_black",
                "label": "Traditional Blackboard",
                "contrast_recommendation": "Invert to dark-on-light or apply high-contrast yellow filter",
                "is_dark_background": True
            }
        elif mean_v > 200 and mean_s < 60:
            return {
                "type": "whiteboard_modern",
                "label": "Modern Glossy Whiteboard / Slide",
                "contrast_recommendation": "Glare suppression & sharpening filter applied",
                "is_dark_background": False
            }
        else:
            return {
                "type": "textbook_document",
                "label": "Printed Textbook / Question Paper",
                "contrast_recommendation": "Binarize with adaptive thresholding",
                "is_dark_background": False
            }

    def enhance_board(self, bgr_img: np.ndarray) -> np.ndarray:
        """Applies adaptive contrast enhancement, glare suppression, and bilateral noise removal."""
        # Convert to LAB color space for luminance enhancement
        lab = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2LAB)
        l, a, b = cv2.split(lab)

        # CLAHE (Contrast Limited Adaptive Histogram Equalization) on L channel
        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
        cl = clahe.apply(l)

        limg = cv2.merge((cl, a, b))
        enhanced_bgr = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)

        # Bilateral filter to smooth chalk dust/reflections while keeping edges crisp
        smooth = cv2.bilateralFilter(enhanced_bgr, d=7, sigmaColor=50, sigmaSpace=50)

        # Slight unsharp masking
        gaussian = cv2.GaussianBlur(smooth, (0, 0), 2.0)
        unsharp = cv2.addWeighted(smooth, 1.3, gaussian, -0.3, 0)
        return unsharp

    def segment_rois(self, bgr_img: np.ndarray) -> tuple[np.ndarray, list[dict]]:
        """
        Segment text blocks, math formulas, and diagrams using morphological analysis,
        contour hierarchy, and aspect ratio classification.
        """
        gray = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2GRAY)
        h, w = gray.shape

        # Adaptive thresholding to isolate chalk/marker strokes
        thresh = cv2.adaptiveThreshold(
            gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 15, 6
        )

        # Morphological operations to group words into blocks
        rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (18, 5))
        dilation = cv2.dilate(thresh, rect_kernel, iterations=1)

        contours, _ = cv2.findContours(dilation, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        annotated = bgr_img.copy()
        rois = []

        # Sort contours top to bottom, left to right
        sorted_contours = sorted(contours, key=lambda c: (cv2.boundingRect(c)[1] // 40, cv2.boundingRect(c)[0]))

        roi_id = 1
        for cnt in sorted_contours:
            bx, by, bw, bh = cv2.boundingRect(cnt)
            area = bw * bh

            # Filter out tiny noise dots
            if area < 1000 or bw < 35 or bh < 15:
                continue

            aspect_ratio = bw / float(bh)
            is_large_box = (bw > w * 0.25 and bh > h * 0.2) or (aspect_ratio < 2.0 and area > 18000)
            is_title = by < h * 0.18 and bw > w * 0.35 and bh < h * 0.15

            if is_title:
                category = "title"
                color = (0, 200, 0) # Green
                label = f"Header: Block #{roi_id}"
            elif is_large_box:
                category = "diagram"
                color = (200, 50, 180) # Purple/Magenta
                label = f"Diagram/Visual #{roi_id}"
            elif "=" in label or aspect_ratio > 3.0 or ("Formula" in label):
                # Will be refined during OCR
                category = "math_or_text"
                color = (255, 100, 20) # Blue/Orange
                label = f"Content Block #{roi_id}"
            else:
                category = "content"
                color = (30, 144, 255) # Dodgy Blue
                label = f"Section #{roi_id}"

            # Draw clear bounding box with accessibility tag
            cv2.rectangle(annotated, (bx, by), (bx + bw, by + bh), color, 2)
            cv2.rectangle(annotated, (bx, max(0, by - 22)), (bx + len(label) * 9, by), color, -1)
            cv2.putText(
                annotated, label, (bx + 4, max(14, by - 6)),
                cv2.FONT_HERSHEY_SIMPLEX, 0.45, (255, 255, 255), 1, cv2.LINE_AA
            )

            rois.append({
                "id": roi_id,
                "category": category,
                "x": int(bx),
                "y": int(by),
                "width": int(bw),
                "height": int(bh),
                "label": label,
                "bbox": [int(bx), int(by), int(bw), int(bh)]
            })
            roi_id += 1

        return annotated, rois

    @staticmethod
    def img_to_base64(img_bgr_or_rgb, is_rgb=False) -> str:
        """Converts an image array to base64 JPEG data URL."""
        if not is_rgb:
            img_rgb = cv2.cvtColor(img_bgr_or_rgb, cv2.COLOR_BGR2RGB)
        else:
            img_rgb = img_bgr_or_rgb
        pil_img = Image.fromarray(img_rgb)
        buffered = io.BytesIO()
        pil_img.save(buffered, format="JPEG", quality=88)
        encoded = base64.b64encode(buffered.getvalue()).decode("utf-8")
        return f"data:image/jpeg;base64,{encoded}"
