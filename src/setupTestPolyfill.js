const setupTestsPolyfill = () => {
  global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0);
  };
};

setupTestsPolyfill();

export default setupTestsPolyfill;
