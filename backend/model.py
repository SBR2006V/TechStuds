import random

def predict_image(image):
    """
    Dummy AI prediction function (for demo purposes)

    Args:
        image: PIL Image (not used here, but kept for future ML upgrade)

    Returns:
        prediction (str): Risk level
        confidence (float): Confidence percentage
    """

    # Possible outputs
    risk_levels = ["Low Risk", "Medium Risk", "High Risk"]

    # Random prediction
    prediction = random.choice(risk_levels)

    # Random confidence (realistic range)
    confidence = round(random.uniform(70, 95), 2)

    return prediction, confidence