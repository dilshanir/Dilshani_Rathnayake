// Minimal JavaScript for smooth scroll and active nav state
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links (fallback for older browsers)
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

const blogPosts = [
  {
    title: "Why I Build Small Projects",
    date: "Jan 2026",
    summary:
      "I used to think big projects made better developers. I was wrong. This is why I now focus on small, deliberate builds."
  },
  {
    title: "What I Struggled With This Week",
    date: "Jan 2026",
    summary:
      "Understanding async JavaScript didn’t click immediately. This post breaks down what confused me and how I fixed it."
  }
];

function renderBlogPosts() {
  const container = document.getElementById("blog-posts");
  if (!container) return;

  container.innerHTML = "";

  blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.className = "blog-post";

    article.innerHTML = `
      <h3>${post.title}</h3>
      <div class="blog-meta">${post.date}</div>
      <p>${post.summary}</p>
    `;

    container.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", renderBlogPosts);

