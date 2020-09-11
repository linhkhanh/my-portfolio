import React from 'react';

function Projects() {
    return (
        <div>
            <div class="container my-5 project">

                <section class="dark-grey-text text-center">

                    <h3 class="font-weight-bold mb-4 pb-2">My best projects</h3>
                    <p class="text-muted w-responsive mx-auto mb-5">Let's take a look my projects</p>

                    <div class="row">

                        <div class="col-lg-4 col-md-12 mb-4">

                            <div class="view overlay zoom rounded z-depth-1">
                                <img src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599809309/Screen_Shot_2020-09-11_at_3.27.59_PM_jqcqmq.png"
                                    class="img-fluid" alt="Sample project"
                                    data-toggle="modal" data-target="#centralModalInfo" />
                                <a href="https://linhkhanh.github.io/Project-1/index.html">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 class="font-weight-bold mt-1 mb-3">Memory Game</h4>

                                <p class="btn btn-indigo btn-sm btn-rounded" data-toggle="modal" data-target="#memory-game"><i class="fas fa-clone left"></i> View project</p>
                            </div>
                        </div>

                        {/* Modal */}

                        {/* <!-- Central Modal Medium Info --> */}
                        <div class="modal fade" id="memory-game" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-notify modal-info" role="document">
                                {/* <!--Content--> */}
                                <div class="modal-content">
                                    {/* <!--Header--> */}
                                    <div class="modal-header">
                                        <p class="heading lead">Memory Game</p>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" class="white-text">&times;</span>
                                        </button>
                                    </div>
                                    {/* 
       <!--Body--> */}
                                    <div class="modal-body">
                                        <div class="text-center">
                                            <svg id="Capa_1" className="animated rotateIn" enable-background="new 0 0 508.18 508.18" height="100" viewBox="0 0 508.18 508.18" width="100" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m217.179 464.656 36.785-10 36.785 10v3.069c0 20.316-16.469 36.785-36.785 36.785-20.316 0-36.785-16.469-36.785-36.785z" fill="#60b7ff"/><path d="m281.06 464.656h-64.192c-7.242 0-13.113-5.871-13.113-13.113v-87.305l50.209-10 40.209 10v87.305c.001 7.242-5.87 13.113-13.113 13.113z" fill="#c4e2ff"/><path d="m277.174 360.01v91.533c0 7.242-5.871 13.113-13.113 13.113h27c7.242 0 13.114-5.871 13.114-13.113v-87.305z" fill="#8ac9fe"/><path d="m373.847 199.78c0-71.112-47.205-128.864-118.108-129.747-71.59-.892-131.407 58.152-131.407 129.747 0 38.383 16.667 72.87 43.158 96.625 19.202 17.22 31.72 40.66 35.975 66.098l.29 1.734h100.419l.245-1.467c4.329-25.882 7.533-49.323 26.947-66.979 26.098-23.732 42.481-57.957 42.481-96.011z" fill="#fed402"/><path d="m255.739 70.033c-5.072-.063-10.082.185-15.019.706 65.255 6.813 116.127 61.982 116.127 129.041 0 38.055-16.384 72.279-42.481 96.012-19.414 17.656-32.618 41.096-36.947 66.979l-.245 1.467h27l.245-1.467c4.329-25.882 17.533-49.323 36.947-66.979 26.097-23.733 42.481-57.957 42.481-96.012 0-71.113-57.205-128.864-128.108-129.747z" fill="#fac600"/><path d="m341.739 210.67v-21.78c0-2.761-2.238-5-5-5h-20.544c-1.524-5.975-3.89-11.612-6.96-16.783l14.533-14.533c1.953-1.953 1.953-5.118 0-7.071l-15.4-15.4c-1.953-1.953-5.118-1.953-7.071 0l-14.533 14.533c-5.171-3.07-10.808-5.436-16.783-6.961v-20.544c0-2.761-2.239-5-5-5h-21.781c-2.761 0-5 2.239-5 5v20.544c-5.975 1.524-11.612 3.89-16.783 6.96l-14.533-14.533c-1.953-1.953-5.118-1.953-7.071 0l-15.4 15.4c-1.953 1.953-1.953 5.118 0 7.071l14.533 14.533c-3.07 5.171-5.436 10.808-6.96 16.783h-20.544c-2.761 0-5 2.239-5 5v21.78c0 2.761 2.239 5 5 5h20.544c1.524 5.975 3.89 11.612 6.96 16.783l-14.533 14.533c-1.953 1.953-1.953 5.118 0 7.071l15.4 15.4c1.953 1.953 5.118 1.953 7.071 0l14.533-14.533c5.171 3.07 10.808 5.436 16.783 6.96v20.544c0 2.761 2.239 5 5 5h21.78c2.761 0 5-2.239 5-5v-20.544c5.975-1.524 11.612-3.89 16.783-6.96l14.533 14.533c1.953 1.953 5.118 1.953 7.071 0l15.4-15.4c1.953-1.953 1.953-5.118 0-7.071l-14.533-14.533c3.07-5.171 5.436-10.808 6.961-16.783h20.544c2.761.001 5-2.238 5-4.999zm-87.649 20.079c-17.104 0-30.969-13.865-30.969-30.969s13.865-30.969 30.969-30.969 30.969 13.865 30.969 30.969-13.866 30.969-30.969 30.969z" fill="#efedef"/></g><g id="_x31_3_idea_1_"><path d="m254.09 48.662c4.142 0 7.5-3.358 7.5-7.5v-33.662c0-4.142-3.358-7.5-7.5-7.5-4.143 0-7.5 3.358-7.5 7.5v33.662c0 4.142 3.357 7.5 7.5 7.5z"/><path d="m384.741 58.511-23.803 23.803c-2.929 2.929-2.929 7.678 0 10.606 1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197l23.803-23.803c2.929-2.929 2.929-7.678 0-10.606-2.93-2.928-7.678-2.928-10.608 0z"/><path d="m136.634 306.618-23.803 23.803c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l23.803-23.803c2.929-2.929 2.929-7.678 0-10.606-2.928-2.929-7.677-2.929-10.606 0z"/><path d="m136.634 92.92c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-23.803-23.803c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606z"/><path d="m371.546 306.618c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l23.803 23.803c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606z"/><path d="m95.483 192.269h-33.663c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h33.662c4.142 0 7.5-3.358 7.5-7.5.001-4.142-3.357-7.5-7.499-7.5z"/><path d="m446.359 192.269h-33.662c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h33.662c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m314.384 405.2c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-2.71v-25.35l.143-.853c1.531-9.156 4.28-18.117 8.171-26.633 1.721-3.768.061-8.217-3.706-9.938-3.768-1.722-8.218-.062-9.938 3.706-3.755 8.221-6.567 16.812-8.406 25.596h-87.929c-5.261-25.567-18.462-48.836-37.51-65.917-22.502-20.178-36.687-47.757-39.941-77.655-.448-4.118-4.147-7.091-8.268-6.645-4.118.448-7.093 4.15-6.644 8.268 3.655 33.58 19.579 64.548 44.839 87.199 17.644 15.822 29.571 37.753 33.585 61.751l.188 1.122v25.349h-2.46c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h2.46v18.473h-2.46c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h2.46v12.86c0 8.876 5.65 16.437 13.533 19.334 1.091 15.654 10.266 29.46 24.494 36.529 1.072.533 2.21.785 3.331.785 2.758 0 5.412-1.527 6.723-4.165 1.843-3.71.33-8.211-3.38-10.054-8.694-4.32-14.528-12.443-15.939-21.816h57.894c-1.41 9.373-7.244 17.496-15.938 21.815-3.71 1.843-5.223 6.345-3.38 10.054 1.31 2.637 3.965 4.164 6.723 4.164 1.121 0 2.26-.252 3.331-.785 14.228-7.069 23.402-20.875 24.493-36.528 7.884-2.897 13.533-10.458 13.533-19.334v-12.86h2.71c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-2.71v-18.472zm-103.129-33.473h85.418v18.473h-85.418zm85.419 79.805c0 3.095-2.518 5.613-5.613 5.613h-74.192c-3.095 0-5.613-2.518-5.613-5.613v-12.86h85.418zm0-27.86h-85.418v-18.472h85.418z"/><path d="m254.09 238.238c21.212 0 38.469-17.257 38.469-38.469s-17.258-38.469-38.469-38.469c-21.212 0-38.469 17.257-38.469 38.469s17.257 38.469 38.469 38.469zm0-61.938c12.94 0 23.469 10.528 23.469 23.469s-10.528 23.469-23.469 23.469-23.469-10.528-23.469-23.469 10.528-23.469 23.469-23.469z"/><path d="m171.441 176.379c-6.893 0-12.5 5.607-12.5 12.5v21.78c0 6.893 5.607 12.5 12.5 12.5h14.97c.935 2.703 2.032 5.349 3.287 7.924l-10.589 10.589c-4.874 4.874-4.874 12.804 0 17.677l15.4 15.4c4.874 4.874 12.804 4.874 17.678 0l10.589-10.588c2.575 1.255 5.221 2.352 7.924 3.287v14.97c0 6.893 5.607 12.5 12.5 12.5h21.779c6.893 0 12.5-5.607 12.5-12.5v-14.97c2.703-.935 5.349-2.032 7.924-3.287l10.589 10.588c2.36 2.361 5.5 3.662 8.839 3.662s6.478-1.3 8.84-3.661l15.4-15.401c4.872-4.874 4.872-12.803 0-17.677l-10.589-10.589c1.255-2.575 2.353-5.221 3.286-7.924h14.971c6.893 0 12.5-5.607 12.5-12.5v-21.78c0-6.893-5.607-12.5-12.5-12.5h-14.971c-.934-2.703-2.031-5.348-3.286-7.924l10.589-10.589c4.872-4.874 4.872-12.803 0-17.677l-15.401-15.401c-2.361-2.36-5.5-3.66-8.839-3.66s-6.478 1.3-8.839 3.661l-10.589 10.589c-2.575-1.255-5.221-2.353-7.924-3.287v-14.97c0-6.893-5.607-12.5-12.5-12.5h-21.779c-6.893 0-12.5 5.607-12.5 12.5v14.97c-2.703.934-5.349 2.032-7.924 3.287l-10.589-10.589c-4.874-4.874-12.804-4.874-17.678 0l-15.4 15.4c-4.874 4.874-4.874 12.804 0 17.678l10.589 10.589c-1.255 2.575-2.353 5.221-3.288 7.924h-14.969zm32.808-14.586-12.766-12.765 11.865-11.865 12.765 12.766c2.426 2.424 6.183 2.896 9.133 1.145 4.634-2.751 9.616-4.818 14.808-6.142 3.322-.847 5.646-3.839 5.646-7.268v-18.044h16.779v18.044c0 3.428 2.324 6.42 5.647 7.268 5.191 1.324 10.174 3.39 14.808 6.142 2.949 1.752 6.708 1.278 9.133-1.145l12.765-12.766 11.865 11.865-12.766 12.766c-2.424 2.424-2.896 6.185-1.145 9.133 2.751 4.633 4.817 9.615 6.141 14.806.847 3.322 3.839 5.647 7.268 5.647h18.045v16.78h-18.045c-3.429 0-6.42 2.325-7.268 5.647-1.324 5.192-3.39 10.173-6.141 14.806-1.751 2.948-1.279 6.708 1.145 9.133l12.766 12.766-11.865 11.865-12.765-12.765c-2.426-2.425-6.185-2.898-9.133-1.146-4.633 2.751-9.615 4.817-14.808 6.142-3.322.847-5.647 3.839-5.647 7.267v18.044h-16.779v-18.044c0-3.428-2.324-6.42-5.646-7.267-5.192-1.325-10.175-3.392-14.808-6.142-2.949-1.751-6.707-1.278-9.133 1.146l-12.765 12.765-11.865-11.865 12.765-12.766c2.425-2.424 2.896-6.185 1.146-9.133-2.751-4.632-4.817-9.614-6.143-14.807-.847-3.322-3.839-5.646-7.267-5.646h-18.044v-16.78h18.044c3.428 0 6.42-2.324 7.267-5.646 1.325-5.192 3.392-10.175 6.143-14.808 1.751-2.949 1.279-6.709-1.145-9.133z"/><path d="m351.717 103.288c-25.535-25.835-59.587-40.313-95.884-40.765-33.638-.404-66.256 11.745-91.895 34.25-25.407 22.302-41.742 52.735-45.996 85.693-.53 4.108 2.371 7.868 6.479 8.398 4.105.53 7.868-2.371 8.398-6.479 3.786-29.336 18.352-56.447 41.014-76.339 22.849-20.057 51.937-30.914 81.812-30.525 32.328.403 62.658 13.298 85.402 36.31 22.764 23.032 35.3 53.552 35.3 85.938 0 34.358-14.59 67.331-40.027 90.463-3.917 3.563-7.643 7.396-11.074 11.395-2.697 3.144-2.336 7.878.808 10.576 1.414 1.214 3.151 1.809 4.88 1.809 2.112 0 4.212-.887 5.695-2.616 3.03-3.531 6.322-6.917 9.783-10.065 28.558-25.97 44.936-62.987 44.936-101.561-.001-36.36-14.075-70.624-39.631-96.482z"/></g></g></svg>
                                            
                                            <ul className="text-left">
                                                <li>This is a memory game built using <span className="name">Jquery</span>.</li>
                                                <li>Users use their memory to match images and score points.</li>
                                                <li>The game has <span className="name">multiple modes</span>, multiple difficulties and can save high score to local storage.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!--Footer--> */}
                                    <div class="modal-footer justify-content-center">
                                        <a type="button" class="btn btn-primary" href="https://github.com/linhkhanh/Project-1">View code</a>
                                        <a type="button" class="btn btn-outline-primary waves-effect" href="https://linhkhanh.github.io/Project-1/index.html">Demo</a>
                                    </div>
                                </div>
                                {/* <!--/.Content--> */}
                            </div>
                        </div>
                        {/* <!-- Central Modal Medium Info--> */}

                        <div class="col-lg-4 col-md-6 mb-4">

                            <div class="view overlay zoom z-depth-1">
                                <img src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599809348/Screen_Shot_2020-09-11_at_3.28.50_PM_n63n23.png" class="img-fluid" alt="Sample project" />
                                <a href="http://lico-project2-ga.herokuapp.com/lico/login">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 class="font-weight-bold mt-1 mb-3">Instagram clone</h4>

                                <p class="btn btn-indigo btn-sm btn-rounded" data-toggle="modal" data-target="#instagram"><i class="fas fa-clone left"></i> View project</p>
                            </div>

                        </div>

                        {/* Modal */}

                        {/* <!-- Central Modal Medium Info --> */}
                        <div class="modal fade" id="instagram" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-notify modal-info" role="document">
                                {/* <!--Content--> */}
                                <div class="modal-content">
                                    {/* <!--Header--> */}
                                    <div class="modal-header">
                                        <p class="heading lead">Instagram Clone</p>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" class="white-text">&times;</span>
                                        </button>
                                    </div>
                                    {/* 
       <!--Body--> */}
                                    <div class="modal-body">
                                        <div class="text-center">
                                            <svg id="Capa_1" className="animated rotateIn" enable-background="new 0 0 512 512" height="100" viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m191.35 127.709v-46.467c0-11.158 9.045-20.203 20.203-20.203h88.894c11.158 0 20.203 9.045 20.203 20.203v46.467z" fill="#818181"/></g><g><path d="m223.675 93.364h64.65v34.346h-64.65z" fill="#9dc6fb"/></g><g><path d="m118.618 127.709h-68.691v-24.244c0-5.579 4.523-10.102 10.102-10.102h48.488c5.579 0 10.102 4.523 10.102 10.102v24.244z" fill="#818181"/></g><g><path d="m154.984 40.835h202.033v497h-202.033z" fill="#f9f6f9" transform="matrix(0 1 -1 0 545.335 33.335)"/></g><g><path d="m393.382 306.508c9.484 0 17.173-7.689 17.173-17.173s-7.689-17.173-17.173-17.173h-19.193v34.346z" fill="#454545"/></g><g><path d="m118.618 306.508c-9.484 0-17.173-7.689-17.173-17.173s7.689-17.173 17.173-17.173h19.193v34.346z" fill="#454545"/></g><g><path d="m7.5 188.319v-50.508c0-5.579 4.523-10.102 10.102-10.102h476.797c5.579 0 10.102 4.523 10.102 10.102v50.508z" fill="#eab14d"/></g><g><path d="m504.5 390.352v50.508c0 5.579-4.523 10.102-10.102 10.102h-476.797c-5.579 0-10.102-4.523-10.102-10.102v-50.508z" fill="#eab14d"/></g><g><path d="m480.256 188.319h24.244v202.033h-24.244z" fill="#dfdde2"/></g><g><path d="m494.399 127.709h-24.244c5.579 0 10.102 4.523 10.102 10.102v50.508h24.243v-50.508c0-5.579-4.523-10.102-10.101-10.102z" fill="#e49542"/></g><g><path d="m480.256 390.352v50.508c0 5.579-4.523 10.102-10.102 10.102h24.244c5.579 0 10.102-4.523 10.102-10.102v-50.508z" fill="#e49542"/></g><g><circle cx="256" cy="289.335" fill="#818181" r="120.209"/></g><g><path d="m334.178 198.025c18.013 21.019 28.899 48.326 28.899 78.178 0 66.39-53.82 120.209-120.209 120.209-29.852 0-57.159-10.886-78.178-28.899 22.047 25.726 54.773 42.031 91.31 42.031 66.39 0 120.209-53.82 120.209-120.209 0-36.537-16.305-69.263-42.031-91.31z" fill="#595959"/></g><g><circle cx="256" cy="289.335" fill="#454545" r="87.884"/></g><g><circle cx="256" cy="289.335" fill="#9dc6fb" r="40.407"/></g><g><path d="m275.318 253.855c3.139 5.742 4.926 12.325 4.926 19.318 0 22.28-18.126 40.406-40.407 40.406-6.993 0-13.575-1.787-19.318-4.926 6.863 12.554 20.193 21.089 35.48 21.089 22.28 0 40.407-18.126 40.407-40.407.001-15.287-8.534-28.617-21.088-35.48z" fill="#80b4fb"/></g><g><circle cx="441.87" cy="188.319" fill="#e28086" r="26.264"/></g><g><path d="m494.398 120.209h-166.248v-38.967c0-15.275-12.428-27.703-27.703-27.703h-88.895c-15.275 0-27.703 12.428-27.703 27.703v38.968h-57.731v-16.744c0-9.706-7.896-17.602-17.602-17.602h-48.488c-9.705 0-17.602 7.896-17.602 17.602v16.744h-24.824c-9.706-.001-17.602 7.895-17.602 17.601v170.332c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-112.324h154.126c-19.361 17.998-33.142 41.915-38.435 68.843h-12.074c-13.604 0-24.673 11.068-24.673 24.673s11.068 24.673 24.673 24.673h12.074c5.293 26.928 19.074 50.845 38.435 68.843h-154.126v-39.66c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v97.668c0 9.706 7.896 17.602 17.602 17.602h476.797c9.705 0 17.602-7.896 17.602-17.602v-179.061c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v121.054h-154.127c19.361-17.998 33.142-41.915 38.435-68.843h12.074c13.604 0 24.673-11.068 24.673-24.673s-11.068-24.673-24.673-24.673h-12.074c-5.292-26.928-19.074-50.845-38.434-68.843h66.082c3.421 15.018 16.875 26.264 32.915 26.264 16.039 0 29.492-11.245 32.914-26.264h22.214v30.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-88.975c0-9.706-7.896-17.602-17.602-17.602zm-295.548-38.967c0-7.004 5.698-12.703 12.703-12.703h88.895c7.005 0 12.703 5.699 12.703 12.703v38.968h-17.325v-26.846c0-4.142-3.357-7.5-7.5-7.5h-64.65c-4.143 0-7.5 3.358-7.5 7.5v26.846h-17.326zm32.325 38.967v-19.346h49.65v19.346zm-173.748-16.744c0-1.435 1.167-2.602 2.602-2.602h48.488c1.435 0 2.602 1.167 2.602 2.602v16.744h-53.692zm61.191 195.543c-5.334 0-9.673-4.339-9.673-9.673s4.339-9.673 9.673-9.673h10.037c-.24 3.193-.364 6.419-.364 9.673s.124 6.479.364 9.673zm378.382 98.844v43.008c0 1.435-1.167 2.602-2.602 2.602h-476.796c-1.435 0-2.602-1.167-2.602-2.602v-43.008h173.743c19.545 12.158 42.593 19.193 67.257 19.193s47.712-7.035 67.257-19.193zm-103.618-118.189c5.334 0 9.673 4.339 9.673 9.673s-4.339 9.673-9.673 9.673h-10.037c.24-3.193.364-6.419.364-9.673s-.124-6.479-.364-9.673zm-24.673 9.672c0 62.148-50.561 112.709-112.709 112.709s-112.709-50.561-112.709-112.709 50.561-112.709 112.709-112.709 112.709 50.561 112.709 112.709zm73.161-82.252c-10.33 0-18.736-8.391-18.762-18.716 0-.016.002-.032.002-.048s-.002-.032-.002-.049c.026-10.324 8.432-18.717 18.762-18.717 10.334 0 18.741 8.397 18.762 18.726 0 .013-.002.026-.002.039s.002.025.002.038c-.022 10.331-8.428 18.727-18.762 18.727zm32.914-26.263c-3.421-15.019-16.875-26.265-32.914-26.265-16.04 0-29.494 11.246-32.915 26.265h-85.698c-19.545-12.158-42.594-19.194-67.258-19.194s-47.712 7.035-67.257 19.193h-173.742v-43.008c0-1.435 1.167-2.602 2.602-2.602h476.797c1.435 0 2.602 1.167 2.602 2.602v43.009z"/><path d="m303.906 289.335c0-26.416-21.49-47.907-47.906-47.907s-47.906 21.491-47.906 47.907 21.49 47.906 47.906 47.906 47.906-21.49 47.906-47.906zm-80.812 0c0-18.145 14.762-32.907 32.906-32.907s32.906 14.762 32.906 32.907-14.762 32.906-32.906 32.906-32.906-14.761-32.906-32.906z"/><path d="m256 193.951c-16 0-31.84 4.058-45.808 11.735-3.63 1.995-4.955 6.555-2.96 10.186s6.558 4.956 10.185 2.96c11.761-6.464 25.103-9.881 38.583-9.881 44.324 0 80.384 36.06 80.384 80.384s-36.06 80.385-80.384 80.385-80.384-36.06-80.384-80.384c0-18.233 5.978-35.435 17.286-49.745 2.567-3.25 2.016-7.966-1.234-10.534-3.25-2.569-7.966-2.016-10.535 1.234-13.422 16.985-20.517 37.403-20.517 59.045 0 52.595 42.789 95.384 95.384 95.384s95.384-42.789 95.384-95.384-42.789-95.385-95.384-95.385z"/></g></g></svg>
                                          
                                            <ul className="text-left">
                                                <li>This is a web app using <span className="name">Node.js and Mongodb</span>.</li>
                                                <li>Users can upload their images, love and comment on images.</li>
                                                <li>There is notification when user comment or love image</li>
                                                <li className="name">Responsive Design</li>
                                                <li>Integration with Cloudinary</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!--Footer--> */}
                                    <div class="modal-footer justify-content-center">
                                        <a type="button" class="btn btn-primary" href="https://github.com/linhkhanh/project2">View code</a>
                                        <a type="button" class="btn btn-outline-primary waves-effect"  href="http://lico-project2-ga.herokuapp.com/lico/login">Demo</a>
                                    </div>
                                </div>
                                {/* <!--/.Content--> */}
                            </div>
                        </div>
                        {/* <!-- Central Modal Medium Info--> */}
                        <div class="col-lg-4 col-md-6 mb-4">

                            <div class="view overlay zoom z-depth-1">
                                <img src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599809186/Screen_Shot_2020-09-11_at_3.25.18_PM_ixx8ta.png" class="img-fluid" alt="Sample project" />
                                <a href="https://sweetaccountant.herokuapp.com/">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 class="font-weight-bold mt-1 mb-3">Sweet Accountant</h4>

                                <p class="btn btn-indigo btn-sm btn-rounded" data-toggle="modal" data-target="#accountant"><i class="fas fa-clone left"></i> View project</p>
                            </div>

                        </div>

                    </div>
                    {/* Modal */}

                    {/* <!-- Central Modal Medium Info --> */}
                    <div class="modal fade" id="accountant" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-notify modal-info" role="document">
                            {/* <!--Content--> */}
                            <div class="modal-content">
                                {/* <!--Header--> */}
                                <div class="modal-header">
                                    <p class="heading lead">Sweet Accountant</p>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" class="white-text">&times;</span>
                                    </button>
                                </div>
                                {/* 
       <!--Body--> */}
                                <div class="modal-body">
                                    <div class="text-center">
                                        <svg id="Layer_5" className="animated rotateIn" enable-background="new 0 0 64 64" height="100" viewBox="0 0 64 64" width="100" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m26 8h-20c-2.21 0-4 1.79-4 4v34c0 2.21 1.79 4 4 4h.2.001c.927-4.564 4.961-8 9.799-8 3.269 0 6.162 1.575 7.987 4.001l.003-.001h6.01v-8.67-25.33c0-2.21-1.79-4-4-4z" fill="#969faa"/></g><g><path d="m26 27v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m26 35v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m18 35v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m18 27v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m10 27v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m10 35v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m10 44.01c-.76.56-1.43 1.23-1.99 1.99h-1.01c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1z" fill="#e6e9ed"/></g><g><path d="m26 13v8c0 .55-.45 1-1 1h-18c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h18c.55 0 1 .45 1 1z" fill="#69d6f4"/></g><g><path d="m37 27c1.66 0 3 1.34 3 3 0 .39-.08.77-.22 1.11-.43 1.11-1.51 1.89-2.78 1.89-.81 0-1.54-.32-2.07-.83-.57-.55-.93-1.32-.93-2.17 0-1.66 1.34-3 3-3z" fill="#ff826e"/></g><g><path d="m52 32c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.52.1-1.02.29-1.48.59-1.48 2.03-2.52 3.71-2.52z" fill="#ff826e"/></g><g><path d="m61.11 50.55c.54.28.89.84.89 1.45s-.35 1.17-.89 1.45l-9.11 4.55-2-3 2-3.01-2-2.99 2-3z" fill="#aab2bd"/></g><g><circle cx="16" cy="52" fill="#fcd770" r="10"/></g><g><path d="m52 51.99-2 3.01 2 3h-28.01c1.26-1.67 2.01-3.75 2.01-6v-.01z" fill="#69d6f4"/></g><g><path d="m52 46-2 3 2 2.99h-26c0-2.25-.75-4.32-2.01-5.99h6.01z" fill="#b4dd7f"/></g><g><circle cx="52" cy="12" fill="#fcd770" r="10"/></g></g><g><path d="m17 45h-2v2c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .448 1 1s-.449 1-1 1h-3v-1h-2v3h3v2h2v-2c1.654 0 3-1.346 3-3s-1.346-3-3-3h-2c-.551 0-1-.448-1-1s.449-1 1-1h3v1h2v-3h-3z"/><path d="m53 19v-2c1.654 0 3-1.346 3-3s-1.346-3-3-3h-2c-.551 0-1-.449-1-1s.449-1 1-1h3v1h2v-3h-3v-2h-2v2c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-3v-1h-2v3h3v2z"/><path d="m61.553 49.658-9.317-4.658h-21.236v-7.266l4.062-4.256c.577.322 1.232.522 1.938.522 1.32 0 2.482-.65 3.211-1.638l6.878 2.752c-.051.288-.089.582-.089.886 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.414-1.721-4.434-4-4.899v-8.152c5.598-.507 10-5.221 10-10.949 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 5.728 4.402 10.442 10 10.949v8.152c-1.322.269-2.452 1.064-3.171 2.154l-6.88-2.752c.021-.167.051-.331.051-.503 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 .773.23 1.489.612 2.101l-2.612 2.736v-22.837c0-2.757-2.243-5-5-5h-20c-2.757 0-5 2.243-5 5v34c0 2.433 1.749 4.461 4.055 4.904-.035.361-.055.726-.055 1.096 0 6.065 4.935 11 11 11 3.408 0 6.459-1.559 8.479-4h27.757l9.317-4.658c.892-.447 1.447-1.344 1.447-2.342s-.555-1.895-1.447-2.342zm-18.553-37.658c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9-9-4.038-9-9zm9 21c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-15-5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-10.051 22.995c-.13-1.429-.538-2.776-1.163-3.995h24.344l-1.333 1.997 1.333 1.998zm2.051-5.995h-4.521c-.064-.077-.136-.147-.202-.222l4.723-4.949zm-26 1v-34c0-1.654 1.346-3 3-3h20c1.654 0 3 1.346 3 3v24.933l-6.168 6.462c-1.879-1.495-4.25-2.395-6.832-2.395-1.856 0-3.604.466-5.139 1.281-.29-.747-1.012-1.281-1.861-1.281h-2c-1.103 0-2 .897-2 2v2c0 .849.534 1.571 1.281 1.861-.349.657-.629 1.355-.84 2.083-1.387-.264-2.441-1.481-2.441-2.944zm4.521-1h-.521v-2h2v.521c-.538.446-1.033.941-1.479 1.479zm8.479 16c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9zm10.95-8.005h23.182l-1.334 2.002 1.334 2.003h-24.346c.627-1.222 1.034-2.573 1.164-4.005zm33.708-.442-8.315 4.158-1.141-1.713 2-3.002-2-2.998 1.14-1.708 8.316 4.158c.211.105.342.317.342.552s-.131.447-.342.553z"/><path d="m7 23h18c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-18c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zm0-10h18l.001 8h-18.001z"/><path d="m7 31h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2zm0-4h2l.001 2h-2.001z"/><path d="m17 25h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m25 25h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m7 39h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2zm0-4h2l.001 2h-2.001z"/><path d="m17 33h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m25 33h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/></g></g></svg>
                                      
                                        <ul className="text-left">
                                            <li>This is a web app about money managament, using <span className="name">ReactJs and SQL</span>.</li>
                                            <li>Users can import bank statements as .csv file</li>
                                            <li>This app used <span className="name">Bayesian Categorization</span> to match a transaction with a category</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!--Footer--> */}
                                <div class="modal-footer justify-content-center">
                                    <a type="button" class="btn btn-primary" href="https://github.com/siewla/sweet-accountant-frontend">Front end</a>
                                    <a type="button" class="btn btn-primary" href="https://github.com/linhkhanh/final-project-backend">Back end</a>
                                    <a type="button" class="btn btn-outline-primary waves-effect" href="https://sweetaccountant.herokuapp.com/">Demo</a>
                                </div>
                            </div>
                            {/* <!--/.Content--> */}
                        </div>
                    </div>
                    {/* <!-- Central Modal Medium Info--> */}
                </section>



            </div>
        </div>
    );
}

export default Projects;
