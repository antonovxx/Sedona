
const initSlider = () => {
  const sliderElement = document.getElementById('slider');
  const minValueElement = document.getElementById('min-price');
  const maxValueElement = document.getElementById('max-price');
  const resetButton = document.getElementById('button-reset');
  const inputs = [minValueElement, maxValueElement];
  
  if (!sliderElement || !minValueElement || !maxValueElement) {
    return;
  }
  
  noUiSlider.create(sliderElement, {
    start: [0, 9000],
    step: 1,
    connect: true,
    range: {
      min: [0],
      max: [15000],
    }
  });
  
  sliderElement.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = parseInt(values[handle]);
  });
  
  minValueElement.addEventListener('change', (evt) => {
    sliderElement.noUiSlider.set([evt.target.value, null]);
  });
  
  maxValueElement.addEventListener('change', (evt) => {
    sliderElement.noUiSlider.set([null, evt.target.value]);
  });
  
  resetButton.addEventListener('click', () => {
    sliderElement.noUiSlider.reset();
  });
};

window.addEventListener('load', initSlider);

