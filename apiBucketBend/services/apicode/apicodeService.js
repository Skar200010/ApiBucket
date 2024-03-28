
const ApiCode = require('../../models/apicode')
const apicodeService = async (bodyData) => {
  try {
    const { title, description, codeSnippet } = bodyData;
    if (!title || !codeSnippet) {
      throw new Error("title and codesnippet are required");
    }

    const newApiCode = new ApiCode({
      title,
      description,
      codeSnippet,
    });

    // Save the new ApiCode document
    const savedApiCode = await newApiCode.save();

    return savedApiCode;
  } catch (error) {
    console.error("Error in adding new code snippet:", error);
    throw new Error(" failed to add new data");
  }
};

module.exports = {apicodeService}