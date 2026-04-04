import numpy as np
import cv2

def predict_image(image):
    img = np.array(image)
    img = cv2.resize(img, (224, 224))

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)

    # --- A: ASYMMETRY ---
    left = gray[:, :112]
    right = np.fliplr(gray[:, 112:])
    asymmetry = np.mean(np.abs(left - right)) / 255

    # --- B: BORDER IRREGULARITY ---
    edges = cv2.Canny(gray, 100, 200)
    edge_density = np.sum(edges) / (224 * 224 * 255)

    # --- C: COLOR VARIATION ---
    std_dev = np.std(img) / 255

    # --- REDNESS (extra signal) ---
    redness = np.mean(img[:, :, 0]) / 255

    # --- COMBINE FEATURES ---
    risk_score = (
        0.3 * asymmetry +
        0.25 * edge_density +
        0.25 * std_dev +
        0.2 * redness
    )

    # --- CLASSIFICATION ---
    if risk_score > 0.55:
        return "High Risk", round(risk_score * 100, 2)
    elif risk_score > 0.35:
        return "Medium Risk", round(risk_score * 100, 2)
    else:
        return "Low Risk", round(risk_score * 100, 2)