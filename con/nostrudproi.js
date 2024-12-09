// Creating an error object
const error = {
    code: 404,
    message: "Not Found"
};

// Updating the description property
const msg = "Resource not found";
error.description = msg;

console.log(error);
// Output: { code: 404, message: "Not Found", description: "Resource not found" }
