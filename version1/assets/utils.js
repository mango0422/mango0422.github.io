// utils.js

/**
 * Removes all tooltip elements from the DOM.
 */
export function removeTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach((tooltip) => tooltip.remove());
}

/**
 * Creates a tooltip element and attaches it to the target element.
 * @param {HTMLElement} target - The target element for the tooltip.
 * @param {string} text - The text to display in the tooltip.
 */
export function attachTooltip(target, text) {
    // Check if tooltip already exists for this element
    if (target.dataset.tooltipInitialized) return;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerText = text;
    document.body.appendChild(tooltip);

    // Show the tooltip when the target is hovered
    target.addEventListener("mouseenter", (e) => {
        const rect = target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
        tooltip.style.opacity = 1;
    });

    // Hide the tooltip when the mouse leaves the target
    target.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });

    // Mark as initialized to prevent duplicates
    target.dataset.tooltipInitialized = true;
}

/**
 * Clears the contents of a specified DOM element.
 * @param {string} selector - The CSS selector of the element to clear.
 */
export function clearElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = '';
    }
}

/**
 * Appends a child element to a specified parent element.
 * @param {string} selector - The CSS selector of the parent element.
 * @param {HTMLElement} child - The child element to append.
 */
export function appendToElement(selector, child) {
    const parent = document.querySelector(selector);
    if (parent) {
        parent.appendChild(child);
    }
}
