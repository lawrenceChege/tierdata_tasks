<template>
  <div
    class="container-fluid page-header d-flex justify-content-between align-items-start"
  >
    <div>
      <h1>Create and share tasks</h1>
      <p class="lead d-none d-md-block">
        Research, ideate and present brand concepts for client consideration
      </p>
    </div>
  </div>
</template>
<style scoped>
/*! CSS Used from: https://fonts.googleapis.com/icon?family=Material+Icons */
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

/*! CSS Used from: https://pipeline.mediumra.re/assets/css/theme.css ; media=all */
@media all {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
  a:hover {
    color: #0056b3;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  button {
    border-radius: 0;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button {
    overflow: visible;
  }
  button {
    text-transform: none;
  }
  button {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  h1 {
    margin-bottom: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #212529;
  }
  h1 {
    font-size: 2.5rem;
  }
  .lead {
    font-size: 1.25rem;
    font-weight: 400;
  }
  .container-fluid {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
  }
  .btn {
    display: inline-block;
    font-weight: 600;
    color: #6c757d;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.3125rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #6c757d;
    text-decoration: none;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  .btn:disabled {
    opacity: 0.65;
  }
  .d-none {
    display: none !important;
  }
  .d-flex {
    display: flex !important;
  }
  @media (min-width: 768px) {
    .d-md-block {
      display: block !important;
    }
  }
  .justify-content-between {
    justify-content: space-between !important;
  }
  .align-items-start {
    align-items: flex-start !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a:not(.btn) {
      text-decoration: underline;
    }
    img {
      page-break-inside: avoid;
    }
    p {
      orphans: 3;
      widows: 3;
    }
  }
  .avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 2px solid #f8f9fa;
    background: #f8f9fa;
    color: #fff;
  }
  .avatars {
    padding-left: 0;
    list-style: none;
    margin: 0;
  }
  .avatars > li {
    display: inline-block;
  }
  .avatars > li + li {
    margin-left: -0.75rem;
  }
  button:focus {
    outline: none;
  }
  .btn-round {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 50%;
    padding: 0;
    background: #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-round i.material-icons {
    font-size: 1rem;
    color: #6c757d;
  }
  .btn-round:hover {
    background: #cfd5db;
  }
  .page-header {
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .page-header .avatars {
    display: inline-block;
  }
  .page-header .avatars + .btn-round {
    margin-left: 0.375rem;
  }
  @media (min-width: 992px) {
    .page-header {
      padding-top: 3rem;
    }
    .page-header .avatars .avatar {
      width: 2.625rem;
      height: 2.625rem;
    }
  }
  @media (min-width: 992px) {
    .container-kanban .container-fluid {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media (max-width: 767.98px) {
    .container-kanban .page-header h1 {
      font-size: 1.5rem;
      margin: 0;
    }
    .container-kanban .page-header > div:last-child {
      display: none !important;
    }
  }
  [data-toggle='tooltip'] {
    position: relative;
  }
  @media (max-width: 767.98px) {
    h1 {
      font-size: 2rem;
    }
  }
  p.lead {
    margin-bottom: 1.5rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
  a:focus {
    outline: none;
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format('woff2');
}
</style>
