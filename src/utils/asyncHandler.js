const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      // next mei err de diye ki aage kisi ko err obj
      // use karna h toh
      next(err);
    });
  };
};

export { asyncHandler };

//ek function le raha h aur return kar raha h ek function
// const asyncHandler = (fn) => { async () => {} }

//try catch style
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message,
//     });
//   }
// };
