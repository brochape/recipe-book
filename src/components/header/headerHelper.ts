export default class HeaderHelper {
  static makeActive(text: string) {
    let headerElements = document.getElementsByClassName("headerTitle");
    for (let i = 0; i < headerElements.length; i++) {
      let element = headerElements[i];
      if (element.textContent === text) {
        element.classList.add("active")
      } else {
        element.classList.remove("active")
      }
    }
  }
}