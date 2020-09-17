<template>
  <div class="kanban-col" tabindex="0">
    <div class="card-list">
      <div class="card-list-header">
        <h6>Done</h6>
        <div>
          <b-card class="padd-12" title="Task Title" sub-title="Task Priority">
            <b-card-text> Task description </b-card-text>

            <small>Assigned to <em>Kevin</em></small>
            <p>Started on: <em>Thursday 24th Aug</em></p>
            <p>Completed on: <em>Teusday 29th Aug</em></p>
            <b-link href="#" class="card-link">Redo</b-link>
          </b-card>
        </div>
        <div>
          <b-card class="padd-12" title="Task Title" sub-title="Task Priority">
            <b-card-text> Task description </b-card-text>

            <small>Assigned to <em>Kevin</em></small>
            <p>Started on: <em>Thursday 24th Aug</em></p>
            <p>Completed on: <em>Teusday 29th Aug</em></p>
            <b-link href="#" class="card-link">Redo</b-link>
          </b-card>
        </div>
      </div>
      <div class="card-list-footer">
        <div>
          <b-button>Finish Project</b-button>
        </div>
      </div>
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
  .padd-12 {
    margin-top: 20px;
  }
  h6 {
    margin-top: 0;
    margin-bottom: 0.75rem;
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
  button,
  [type='button'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  h6 {
    margin-bottom: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #212529;
  }
  h6 {
    font-size: 1rem;
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
  .btn-link {
    font-weight: 400;
    color: #007bff;
    text-decoration: none;
  }
  .btn-link:hover {
    color: #0056b3;
    text-decoration: none;
  }
  .btn-link:focus {
    text-decoration: none;
    box-shadow: none;
  }
  .btn-link:disabled {
    color: #6c757d;
    pointer-events: none;
  }
  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #6c757d;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
  }
  .dropdown-menu-right {
    right: 0;
    left: auto;
  }
  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 0.875rem;
    clear: both;
    font-weight: 400;
    color: #007bff;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #006fe6;
    text-decoration: none;
    background-color: #e9ecef;
  }
  .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
  }
  .dropdown-item:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
  }
  .card-body {
    flex: 1 1 auto;
    padding: 1.5rem;
  }
  .card-title {
    margin-bottom: 1.5rem;
  }
  .d-flex {
    display: flex !important;
  }
  .justify-content-between {
    justify-content: space-between !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .text-danger {
    color: #dc3545 !important;
  }
  a.text-danger:hover,
  a.text-danger:focus {
    color: #a71d2a !important;
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
  }
  .avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 2px solid #f8f9fa;
    background: #f8f9fa;
    color: #fff;
  }
  .card .avatar {
    border-color: #fff;
    background: #fff;
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
  .btn-options {
    color: #6c757d;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .card {
    box-shadow: 0 0.1875rem 0.375rem rgba(33, 37, 41, 0.05);
  }
  @media (max-width: 991.98px) {
    .card-body {
      padding: 1.125rem;
    }
  }
  .card-title h6 {
    margin: 0;
  }
  .card-body .card-options {
    position: absolute;
    top: 1.5rem;
    right: 0.75rem;
  }
  .card {
    margin-bottom: 0.75rem;
  }
  .card .card-title {
    max-width: 90%;
  }
  .card-kanban .card-title {
    margin-bottom: 0.75rem;
  }
  .card-kanban .card-title:last-child {
    margin-bottom: 0;
  }
  .card-kanban .card-body {
    padding: 1rem;
  }
  .card-kanban .avatars {
    margin-bottom: 0.75rem;
  }
  .card-kanban .avatars .avatar {
    width: 1.875rem;
    height: 1.875rem;
  }
  .card-kanban .card-options {
    top: 1rem;
  }
  .card-kanban .card-meta {
    font-size: 0.875rem;
  }
  .card-kanban .card-meta i {
    margin-right: 0.25rem;
  }
  .card-list {
    margin-bottom: 0.75rem;
    border-radius: 0.5rem;
    padding: 1rem;
    background: #2fd4a2;
  }
  .card-list .card {
    border: none;
  }
  .card-list .card:last-child {
    margin-bottom: 0;
  }
  .dropdown-menu {
    box-shadow: 0 0.1875rem 0.375rem rgba(33, 37, 41, 0.1);
    font-size: 0.875rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .dropdown-item {
    border-radius: 0.25rem;
    font-weight: 500;
  }
  .kanban-board > .kanban-col {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex: 1 0 auto;
    width: calc(100vw - 24px);
    max-height: 100%;
    padding-right: 0.75rem;
    padding-bottom: 0.75rem;
    outline: none !important;
  }
  .kanban-board > .kanban-col .card-list {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    max-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .kanban-board > .kanban-col .card-list-body {
    min-height: 1rem;
  }
  .kanban-board > .kanban-col .card-list-header {
    display: block;
    position: relative;
  }
  .kanban-board > .kanban-col .card-list-header .dropdown {
    position: absolute;
    right: 0;
    top: 0;
  }
  .kanban-board > .kanban-col .card-list-body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-y: scroll;
  }
  .kanban-board > .kanban-col .card-list-footer {
    padding-top: 0.75rem;
  }
  .kanban-board > .kanban-col .card-list-footer .btn-link {
    padding: 0;
  }
  @media (min-width: 576px) {
    .kanban-board > .kanban-col {
      max-width: 19.5rem;
    }
  }
  .card-kanban {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none !important;
    cursor: -webkit-grab;
    cursor: grab;
  }
  [data-toggle='tooltip'] {
    position: relative;
  }
  .text-small {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
  a:focus {
    outline: none;
  }
  .kanban-board > .kanban-col .card-list-body {
    -ms-overflow-style: none;
  }
  .kanban-board > .kanban-col .card-list-body::-webkit-scrollbar {
    display: none;
  }
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    .card {
      display: block;
    }
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
