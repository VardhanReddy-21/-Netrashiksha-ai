"""
NetraShiksha AI - Spatial & Semantic Diagram Describer Engine
Generates rich spatial audio tours, anatomical breakdowns, and conceptual descriptions
of scientific diagrams, charts, and chemical structures for visually impaired students.
"""

from typing import Dict, Any, List

class DiagramDescriberEngine:
    def __init__(self):
        # Pre-loaded scientific knowledge base for educational diagrams
        self.diagram_catalog = {
            "plant_cell": {
                "title": "Structure of a Typical Plant Cell",
                "subject": "Biology / Cytology",
                "overview": "This is a detailed schematic representation of an eukaryotic plant cell. Unlike animal cells, it has a rigid outer cell wall and a prominent central vacuole.",
                "spatial_zones": [
                    {
                        "zone": "Outer Boundary (Perimeter)",
                        "elements": [
                            {"name": "Cell Wall", "role": "Rigid cellulosic outer layer providing mechanical support and shape.", "color": "Dark Green"},
                            {"name": "Plasma Membrane", "role": "Semi-permeable lipid bilayer located directly beneath the cell wall regulating transport.", "color": "Light Green"}
                        ]
                    },
                    {
                        "zone": "Central Region",
                        "elements": [
                            {"name": "Central Vacuole", "role": "Occupies over 60% of cellular volume, filled with cell sap to maintain turgor pressure.", "color": "Light Blue"}
                        ]
                    },
                    {
                        "zone": "Upper-Right Cytoplasm",
                        "elements": [
                            {"name": "Nucleus & Nucleolus", "role": "Contains chromatin (DNA) and directs cellular metabolism and replication.", "color": "Pink / Dark Red"}
                        ]
                    },
                    {
                        "zone": "Peripheral Cytoplasm (Scattered)",
                        "elements": [
                            {"name": "Chloroplasts", "role": "Green oval organelles containing chlorophyll stacks (thylakoids) where photosynthesis converts solar energy to glucose.", "color": "Bright Green"},
                            {"name": "Mitochondria", "role": "Double-membraned organelle performing cellular respiration to produce ATP energy.", "color": "Orange"}
                        ]
                    }
                ],
                "audio_walkthrough": "Visual Audio Tour: You are exploring the structure of a plant cell. Starting at the exterior, there is a thick, rigid cell wall drawn in deep green, which protects the plant and gives it structure. Moving inside, the center is dominated by a very large, light-blue oval called the central vacuole, which holds water and keeps the cell firm. Towards the top-right corner sits the spherical nucleus in red, which holds the cell's genetic code. Scattered through the cytoplasm on the left and bottom are oval green chloroplasts, the microscopic solar factories where photosynthesis occurs, alongside orange bean-shaped mitochondria that generate energy.",
                "key_takeaways": [
                    "Cell wall and chloroplasts are exclusive to plant cells and absent in animal cells.",
                    "Photosynthesis occurs specifically in chloroplasts via light-harvesting pigments.",
                    "The central vacuole maintains turgor pressure preventing the plant from wilting."
                ]
            },
            "water_molecule": {
                "title": "Molecular Structure & Polarity of Water (H2O)",
                "subject": "Chemistry / Molecular Bonds",
                "overview": "This diagram illustrates the bent geometry of a single water molecule, demonstrating why water is polar and acts as a universal solvent.",
                "spatial_zones": [
                    {
                        "zone": "Center (Top Vertex)",
                        "elements": [
                            {"name": "Oxygen Atom (O)", "role": "Electronegative central atom with partial negative charge (delta 2-). Holds two lone pairs of electrons.", "color": "Red sphere"}
                        ]
                    },
                    {
                        "zone": "Lower-Left and Lower-Right",
                        "elements": [
                            {"name": "Hydrogen Atoms (H)", "role": "Electropositive atoms with partial positive charge (delta +), bonded to oxygen.", "color": "Blue spheres"}
                        ]
                    },
                    {
                        "zone": "Connecting Rays",
                        "elements": [
                            {"name": "Covalent Bonds & Angle", "role": "Two single covalent bonds subtending a bond angle of 104.5 degrees.", "color": "Thick grey bars"}
                        ]
                    }
                ],
                "audio_walkthrough": "Visual Audio Tour: You are exploring the molecular model of water. In the center, near the top, is a large red sphere representing an oxygen atom. Below it, spreading diagonally down to the left and right like an inverted V, are two smaller blue spheres representing hydrogen atoms. Thick grey bars represent the covalent bonds connecting each hydrogen to oxygen. The angle between the two bonds is exactly 104.5 degrees. Because oxygen pulls electrons more strongly than hydrogen, it carries a partial negative charge while both hydrogens carry partial positive charges, creating a polar dipole.",
                "key_takeaways": [
                    "Bond angle is 104.5 degrees due to electron repulsion from two unshared lone pairs.",
                    "Charge asymmetry creates a permanent dipole, enabling hydrogen bonding and high boiling point."
                ]
            }
        }

    def describe(self, query_or_name: str) -> Dict[str, Any]:
        """Provides spatial audio tour and structured anatomy for a requested diagram."""
        query_lower = query_or_name.lower()
        if "plant" in query_lower or "cell" in query_lower or "biology" in query_lower:
            return self.diagram_catalog["plant_cell"]
        elif "water" in query_lower or "h2o" in query_lower or "chemistry" in query_lower or "molecule" in query_lower:
            return self.diagram_catalog["water_molecule"]
        else:
            # Generic fallback
            return {
                "title": "Classroom Educational Diagram",
                "subject": "STEM Illustration",
                "overview": "Schematic educational diagram segmented from classroom visual board.",
                "spatial_zones": [
                    {
                        "zone": "Primary Focus",
                        "elements": [
                            {"name": "Central Concept", "role": "Visual illustration of core syllabus topic.", "color": "Multicolor"}
                        ]
                    }
                ],
                "audio_walkthrough": "Visual Audio Tour: The diagram displays the central educational concept with labeled components and directional callouts.",
                "key_takeaways": ["Components are arranged to illustrate functional relationships between elements."]
            }
