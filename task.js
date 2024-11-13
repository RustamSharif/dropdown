document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    // Toggle dropdown visibility
    dropdownValue.addEventListener('click', () => {
      dropdownList.classList.toggle('dropdown__list_active');
    });

    // Handle item selection
    dropdownItems.forEach(item => {
      const link = item.querySelector('.dropdown__link');
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action
        dropdownValue.textContent = link.textContent; // Change dropdown value
        dropdownList.classList.remove('dropdown__list_active'); // Close the dropdown
      });
    });
  });
});