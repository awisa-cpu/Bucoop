function runAnimations() {
  runAnimations_31326();
  runAnimations_31317();
  runAnimations_31336();
  runAnimations_31346();
  runAnimations_31356();
  runAnimations_31366();
}
export default runAnimations;
function runAnimations_31326() {
  document
    .querySelector("#id-31326")
    .addEventListener("mousedown", func_31326_31128);

  function func_31326_31128(e) {
    e.stopPropagation();

    document.querySelector("#id-31326").classList.add("animationClass-31326");
    document
      .querySelector("#id-I31326_5021289")
      .classList.add("animationClass-I31326_5021289");
    document
      .querySelector("#id-31326")
      .removeEventListener("mousedown", func_31326_31128);
  }
}
function runAnimations_31317() {
  document
    .querySelector("#id-31317")
    .addEventListener("mouseenter", func_hover_31317_31122);

  function func_hover_31317_31122(e) {
    e.stopPropagation();
    function func_31317_31122(e) {
      e.stopPropagation();

      document.querySelector("#id-31317").classList.add("animationClass-31317");
      document
        .querySelector("#id-I31317_5021265")
        .classList.add("animationClass-I31317_5021265");
      document
        .querySelector("#id-31317")
        .removeEventListener("mouseenter", func_hover_31317_31122);

      document
        .querySelector("#id-31317")
        .addEventListener("mouseout", func_exit_31317_31122);
    }

    function func_exit_31317_31122(e) {
      e.stopPropagation();
      document
        .querySelector("#id-31317")
        .classList.add("animationClassBack-31122");
      document
        .querySelector("#id-I31317_5021265")
        .classList.add("animationClassBack-31123");
      document
        .querySelector("#id-31317")
        .removeEventListener("mouseout", func_exit_31317_31122);
      setTimeout(() => {
        document
          .querySelector("#id-31317")
          .classList.remove("animationClass-31317");
        document
          .querySelector("#id-I31317_5021265")
          .classList.remove("animationClass-I31317_5021265");
        document
          .querySelector("#id-31317")
          .classList.remove("animationClassBack-31122");
        document
          .querySelector("#id-I31317_5021265")
          .classList.remove("animationClassBack-31123");
        document
          .querySelector("#id-31317")
          .addEventListener("mouseenter", func_hover_31317_31122);
      }, 1);
    }
    func_31317_31122();

    setTimeout(() => {
      document
        .querySelector("#id-31317")
        .addEventListener("mousedown", func_31317_31126);
    }, 100);
  }

  function func_31317_31126(e) {
    e.stopPropagation();
    document
      .querySelector("#id-31317")
      .removeEventListener("mouseenter", func_hover_31317_31122);

    document.querySelector("#id-31317").classList.add("animationClass-31122");
    document
      .querySelector("#id-I31317_5021265")
      .classList.add("animationClass-31123");
    document
      .querySelector("#id-31317")
      .removeEventListener("mousedown", func_31317_31126);
  }
}
function runAnimations_31336() {
  document
    .querySelector("#id-31336")
    .addEventListener("mouseenter", func_hover_31336_31122);

  function func_hover_31336_31122(e) {
    e.stopPropagation();
    function func_31336_31122(e) {
      e.stopPropagation();

      document.querySelector("#id-31336").classList.add("animationClass-31336");
      document
        .querySelector("#id-I31336_5021265")
        .classList.add("animationClass-I31336_5021265");
      document
        .querySelector("#id-31336")
        .removeEventListener("mouseenter", func_hover_31336_31122);

      document
        .querySelector("#id-31336")
        .addEventListener("mouseout", func_exit_31336_31122);
    }

    function func_exit_31336_31122(e) {
      e.stopPropagation();
      document
        .querySelector("#id-31336")
        .classList.add("animationClassBack-31122");
      document
        .querySelector("#id-I31336_5021265")
        .classList.add("animationClassBack-31123");
      document
        .querySelector("#id-31336")
        .removeEventListener("mouseout", func_exit_31336_31122);
      setTimeout(() => {
        document
          .querySelector("#id-31336")
          .classList.remove("animationClass-31336");
        document
          .querySelector("#id-I31336_5021265")
          .classList.remove("animationClass-I31336_5021265");
        document
          .querySelector("#id-31336")
          .classList.remove("animationClassBack-31122");
        document
          .querySelector("#id-I31336_5021265")
          .classList.remove("animationClassBack-31123");
        document
          .querySelector("#id-31336")
          .addEventListener("mouseenter", func_hover_31336_31122);
      }, 1);
    }
    func_31336_31122();

    setTimeout(() => {
      document
        .querySelector("#id-31336")
        .addEventListener("mousedown", func_31336_31126);
    }, 100);
  }

  function func_31336_31126(e) {
    e.stopPropagation();
    document
      .querySelector("#id-31336")
      .removeEventListener("mouseenter", func_hover_31336_31122);

    document.querySelector("#id-31336").classList.add("animationClass-31122");
    document
      .querySelector("#id-I31336_5021265")
      .classList.add("animationClass-31123");
    document
      .querySelector("#id-31336")
      .removeEventListener("mousedown", func_31336_31126);
  }
}
function runAnimations_31346() {
  document
    .querySelector("#id-31346")
    .addEventListener("mouseenter", func_hover_31346_31122);

  function func_hover_31346_31122(e) {
    e.stopPropagation();
    function func_31346_31122(e) {
      e.stopPropagation();

      document.querySelector("#id-31346").classList.add("animationClass-31346");
      document
        .querySelector("#id-I31346_5021265")
        .classList.add("animationClass-I31346_5021265");
      document
        .querySelector("#id-31346")
        .removeEventListener("mouseenter", func_hover_31346_31122);

      document
        .querySelector("#id-31346")
        .addEventListener("mouseout", func_exit_31346_31122);
    }

    function func_exit_31346_31122(e) {
      e.stopPropagation();
      document
        .querySelector("#id-31346")
        .classList.add("animationClassBack-31122");
      document
        .querySelector("#id-I31346_5021265")
        .classList.add("animationClassBack-31123");
      document
        .querySelector("#id-31346")
        .removeEventListener("mouseout", func_exit_31346_31122);
      setTimeout(() => {
        document
          .querySelector("#id-31346")
          .classList.remove("animationClass-31346");
        document
          .querySelector("#id-I31346_5021265")
          .classList.remove("animationClass-I31346_5021265");
        document
          .querySelector("#id-31346")
          .classList.remove("animationClassBack-31122");
        document
          .querySelector("#id-I31346_5021265")
          .classList.remove("animationClassBack-31123");
        document
          .querySelector("#id-31346")
          .addEventListener("mouseenter", func_hover_31346_31122);
      }, 1);
    }
    func_31346_31122();

    setTimeout(() => {
      document
        .querySelector("#id-31346")
        .addEventListener("mousedown", func_31346_31126);
    }, 100);
  }

  function func_31346_31126(e) {
    e.stopPropagation();
    document
      .querySelector("#id-31346")
      .removeEventListener("mouseenter", func_hover_31346_31122);

    document.querySelector("#id-31346").classList.add("animationClass-31122");
    document
      .querySelector("#id-I31346_5021265")
      .classList.add("animationClass-31123");
    document
      .querySelector("#id-31346")
      .removeEventListener("mousedown", func_31346_31126);
  }
}
function runAnimations_31356() {
  document
    .querySelector("#id-31356")
    .addEventListener("mouseenter", func_hover_31356_31122);

  function func_hover_31356_31122(e) {
    e.stopPropagation();
    function func_31356_31122(e) {
      e.stopPropagation();

      document.querySelector("#id-31356").classList.add("animationClass-31356");
      document
        .querySelector("#id-I31356_5021265")
        .classList.add("animationClass-I31356_5021265");
      document
        .querySelector("#id-31356")
        .removeEventListener("mouseenter", func_hover_31356_31122);

      document
        .querySelector("#id-31356")
        .addEventListener("mouseout", func_exit_31356_31122);
    }

    function func_exit_31356_31122(e) {
      e.stopPropagation();
      document
        .querySelector("#id-31356")
        .classList.add("animationClassBack-31122");
      document
        .querySelector("#id-I31356_5021265")
        .classList.add("animationClassBack-31123");
      document
        .querySelector("#id-31356")
        .removeEventListener("mouseout", func_exit_31356_31122);
      setTimeout(() => {
        document
          .querySelector("#id-31356")
          .classList.remove("animationClass-31356");
        document
          .querySelector("#id-I31356_5021265")
          .classList.remove("animationClass-I31356_5021265");
        document
          .querySelector("#id-31356")
          .classList.remove("animationClassBack-31122");
        document
          .querySelector("#id-I31356_5021265")
          .classList.remove("animationClassBack-31123");
        document
          .querySelector("#id-31356")
          .addEventListener("mouseenter", func_hover_31356_31122);
      }, 1);
    }
    func_31356_31122();

    setTimeout(() => {
      document
        .querySelector("#id-31356")
        .addEventListener("mousedown", func_31356_31126);
    }, 100);
  }

  function func_31356_31126(e) {
    e.stopPropagation();
    document
      .querySelector("#id-31356")
      .removeEventListener("mouseenter", func_hover_31356_31122);

    document.querySelector("#id-31356").classList.add("animationClass-31122");
    document
      .querySelector("#id-I31356_5021265")
      .classList.add("animationClass-31123");
    document
      .querySelector("#id-31356")
      .removeEventListener("mousedown", func_31356_31126);
  }
}
function runAnimations_31366() {
  document
    .querySelector("#id-31366")
    .addEventListener("mouseenter", func_hover_31366_31122);

  function func_hover_31366_31122(e) {
    e.stopPropagation();
    function func_31366_31122(e) {
      e.stopPropagation();

      document.querySelector("#id-31366").classList.add("animationClass-31366");
      document
        .querySelector("#id-I31366_5021265")
        .classList.add("animationClass-I31366_5021265");
      document
        .querySelector("#id-31366")
        .removeEventListener("mouseenter", func_hover_31366_31122);

      document
        .querySelector("#id-31366")
        .addEventListener("mouseout", func_exit_31366_31122);
    }

    function func_exit_31366_31122(e) {
      e.stopPropagation();
      document
        .querySelector("#id-31366")
        .classList.add("animationClassBack-31122");
      document
        .querySelector("#id-I31366_5021265")
        .classList.add("animationClassBack-31123");
      document
        .querySelector("#id-31366")
        .removeEventListener("mouseout", func_exit_31366_31122);
      setTimeout(() => {
        document
          .querySelector("#id-31366")
          .classList.remove("animationClass-31366");
        document
          .querySelector("#id-I31366_5021265")
          .classList.remove("animationClass-I31366_5021265");
        document
          .querySelector("#id-31366")
          .classList.remove("animationClassBack-31122");
        document
          .querySelector("#id-I31366_5021265")
          .classList.remove("animationClassBack-31123");
        document
          .querySelector("#id-31366")
          .addEventListener("mouseenter", func_hover_31366_31122);
      }, 1);
    }
    func_31366_31122();

    setTimeout(() => {
      document
        .querySelector("#id-31366")
        .addEventListener("mousedown", func_31366_31126);
    }, 100);
  }

  function func_31366_31126(e) {
    e.stopPropagation();
    document
      .querySelector("#id-31366")
      .removeEventListener("mouseenter", func_hover_31366_31122);

    document.querySelector("#id-31366").classList.add("animationClass-31122");
    document
      .querySelector("#id-I31366_5021265")
      .classList.add("animationClass-31123");
    document
      .querySelector("#id-31366")
      .removeEventListener("mousedown", func_31366_31126);
  }
}
// links object
export const allLinks = {};

// function object
export const allFunctions = {};
