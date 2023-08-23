import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="share"
export default class extends Controller {
  static targets = ["result", "title", "body"];

  connect() {
    console.log("Connected to the share controller");
    console.log(this.data.get("urlValue"));
    console.log(this.resultTarget);
  }
  async share(e) {
    e.preventDefault();

    if (navigator.share) {
      await navigator
          .share({
            title: this.titleTarget.textContent,
            body: this.bodyTarget.textContent,
            url: this.data.get("urlValue"),
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
    } else {
      console.error("Browser doesn't support Web Share API");
    }
  }
}
