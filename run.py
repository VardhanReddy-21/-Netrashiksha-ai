"""
NetraShiksha AI (नेत्रशिक्षा AI) - 1-Click Universal Launcher
Multimodal Assistive Classroom for Visually and Hearing Impaired Students
"""

import sys
import os
import socket
import webbrowser
from pathlib import Path

# Force UTF-8 console output on Windows to prevent UnicodeEncodeError
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Add project root to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(PROJECT_ROOT))

def is_port_in_use(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

def find_available_port(preferred_port: int = 8001) -> int:
    port = preferred_port
    while is_port_in_use(port) and port < preferred_port + 20:
        port += 1
    return port

def main():
    print("=" * 72)
    print("      NETRASHIKSHA AI (नेत्रशिक्षा AI) - ASSISTIVE CLASSROOM SYSTEM      ")
    print("    Multimodal Educational Vision & Sign Synthesis for Inclusion    ")
    print("=" * 72)

    preferred_port = int(os.environ.get("PORT", 8001))
    port = find_available_port(preferred_port)
    host = os.environ.get("HOST", "127.0.0.1")
    url = f"http://{host}:{port}"

    print(f"\n[+] Project Root: {PROJECT_ROOT}")
    print(f"[+] Launching NetraShiksha Server on: {url}")
    print(f"[+] Supported Modes:")
    print("     1. Netra Mode: Blackboard OCR, Math Formula Voice Reader, Spatial Diagrams")
    print("     2. Shiksha Mode: Live Subtitles, Jargon Highlighter, ISL Gesture Cards")
    print("     3. Exam Scribe Mode: Verbal Dictation, LaTeX Formatting, Rubric Scoring")
    print(f"[+] Supported Indian Languages: en, hi, te, ta, mr, kn, or, as\n")

    try:
        import uvicorn
        # Launch browser if running locally and not in headless container
        if os.environ.get("NO_BROWSER") != "1" and host in ("127.0.0.1", "localhost"):
            def open_browser():
                import time
                time.sleep(1.2)
                webbrowser.open(f"http://127.0.0.1:{port}")

            import threading
            threading.Thread(target=open_browser, daemon=True).start()

        uvicorn.run("backend.main:app", host=host, port=port, reload=False, log_level="info")
    except KeyboardInterrupt:
        print("\n[!] NetraShiksha AI server stopped cleanly.")
    except Exception as e:
        print(f"\n[X] Error running server: {e}")

if __name__ == "__main__":
    main()
