document.addEventListener("DOMContentLoaded", function () {
  // let trigger = 0;
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowWidth < 768) {
    tourDriverMobile();
  } else {
    tourDriverDesktop();
  }

  window.addEventListener("resize", function () {
    if (windowWidth < 768) {
      tourDriverMobile();
    } else {
      tourDriverDesktop();
    }
  });

  function tourDriverMobile() {
    const driver = window.driver.js.driver;
    const driverObj = driver({
      animate: true,
      allowClose: true,
      steps: [
        {
          element: ".toggle_driver-tour",
          popover: {
            title: "Heading Toggle",
            description: "Description Toggle",
          },
        },
        {
          element: ".dashboard-menu_driver-tour",
          popover: {
            title: "Heading Dasboard",
            description: "Description Dashboard",
          },
        },
      ],
    });

    document
      .querySelector(".toggle_driver-tour")
      .addEventListener("click", function () {
        setTimeout(() => {
          driverObj.moveNext();
        }, 500);
      });

    driverObj.drive();
  }
  function tourDriverDesktop() {
    const driver = window.driver.js.driver;
    const driverObj = driver({
      animate: true,
      allowClose: true,
      steps: [
        {
          element: ".selected-content_driver-tour",
          popover: {
            title: "Heading  Selected",
            description: "Description Selected",
          },
        },
      ],
      onDestroyStarted: () => {
        if (!driverObj.hasNextStep() || confirm("Are you sure?")) {
          driverObj.destroy();
        }
      },
    });
    driverObj.drive();
  }

  // function addTriggerFunc() {
  //   const addTrigger = document.getElementById("addTrigger");
  //   addTrigger.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     trigger = 1;

  //     if (trigger === 1) {
  //       const selectedContent = document.querySelector(
  //         ".selected-content_driver-tour"
  //       );

  //       selectedContent.addEventListener("click", function () {
  //         location.replace("../../documentation.html");
  //         driverObj.moveNext();
  //       });
  //     }
  //   });
  // }
});
