
const ApiCode = require('../../models/apicode')
const getApiCodeService = async () => {
    try {
      const apiCodes = await ApiCode.find();
      return apiCodes;
    } catch (error) {
      console.error("Error in getting all API codes:", error);
      throw new Error("Failed to fetch API codes");
    }
  };
  module.exports = {getApiCodeService}