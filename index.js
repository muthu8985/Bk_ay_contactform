function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  // Fields and error elements
  const nameField = document.getElementById("names");
  const nameError = document.getElementById("name_error");
  const emailField = document.getElementById("email");
  const emailError = document.getElementById("email_error");
  const mobileField = document.getElementById("mobile");
  const mobileError = document.getElementById("mobile_error");
  const courseField = document.getElementById("course");
  const courseError = document.getElementById("courses_error");
  const radioError = document.getElementById("radios_error");
  //   const radios = document.querySelectorAll("input[type='radio'][name=trial-class]:checked").value;

  const radios = document.querySelector(
    "input[type='radio'][name='trial-class']:checked"
  );
  const radioValue = radios ? radios.value : null;

  // Reset errors
  nameError.classList.add("hidden");
  emailError.classList.add("hidden");
  mobileError.classList.add("hidden");
  courseError.classList.add("hidden");
  radioError.classList.add("hidden");

  // Validation logic

  // Name validation
  const nameRegex = /^[A-Za-z\s]+$/;
  const name = nameField.value.trim();
  if (name === "") {
    nameError.textContent = "Name is required.";
    nameError.classList.remove("hidden");
    isValid = false;
  } else if (!nameRegex.test(name)) {
    nameError.textContent = "Name must contain only letters and spaces.";
    nameError.classList.remove("hidden");
    isValid = false;
  } else if (name.length < 8) {
    nameError.textContent = "Name must be at least 8 characters long.";
    nameError.classList.remove("hidden");
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailField.value.trim();
  if (email === "") {
    emailError.textContent = "Email is required.";
    emailError.classList.remove("hidden");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.classList.remove("hidden");
    isValid = false;
  }

  // Mobile validation
  const mobileRegex = /^[0-9]{10}$/;
  const mobile = mobileField.value.trim();
  if (mobile === "") {
    mobileError.textContent = "Mobile number is required.";
    mobileError.classList.remove("hidden");
    isValid = false;
  } else if (!mobileRegex.test(mobile)) {
    mobileError.textContent = "Mobile number must be 10 digits.";
    mobileError.classList.remove("hidden");
    isValid = false;
  }

  // Course validation
  const course = courseField.value.trim();
  if (course === "") {
    courseError.textContent = "Course selection is required.";
    courseError.classList.remove("hidden");
    isValid = false;
  }

  if (!radioValue) {
    radioError.textContent = "Trial class selection is required.";
    radioError.classList.remove("hidden");
    isValid = false;
  }

  const formDatas = {
    names: name,
    emails: email,
    mobiles: mobile,
    courses: course,
    radiobtn: radioValue,
  };

  if (isValid) {
    console.log("Form Data Submitted:", formDatas);
    // alert("Form is valid! Proceeding to submit.");
  } else {
    alert("Please correct the errors and try again.");
  }
}
