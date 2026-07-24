document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
});

const updatedNode = document.querySelector("[data-last-updated]");
const modifiedAt = new Date(document.lastModified);

if (updatedNode && !Number.isNaN(modifiedAt.getTime())) {
    updatedNode.dateTime = modifiedAt.toISOString();
    updatedNode.textContent = modifiedAt.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
}
