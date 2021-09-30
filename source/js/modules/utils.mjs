let attributeValue = ``;

export function saveAttributeValue(value) {
  attributeValue = value;

  return attributeValue;
}

export function getAttributeValue() {
  return attributeValue;
}

export function isEscEvent(evt) {
  return evt.key === `Escape`;
}

export function isTabEvent(evt) {
  return evt.key === `Tab`;
}
