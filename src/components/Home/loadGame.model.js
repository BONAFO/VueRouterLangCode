let token;
export const load_game_modal = (TEXT) => {
  Swal.fire({
    title: TEXT.title,

    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: TEXT.acp_btn,
    cancelButtonText: TEXT.ccl_btn,
    html: `
    <div>
    <label class="basic-label">${TEXT.label}</label>
    <br/>
    <input type="file" class="input-modal input-hidden" id="file-input" accept=".txt">
    <button class="input-modal btn btn-info" id="search-btn">${TEXT.file_inp}</button>
    <br/>
    <input placeholder="${TEXT.txt_inp_ph}" type="text" class="input-modal basic-input" id="txt-input">

    
    </div>
    


            
            `,

    customClass: {
      title: "txt-sw2",
      popup: "pop-sw2",
      confirmButton: "btn-sw2-confirm",
      cancelButton: "btn-sw2-cancel",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(token);
    }
  });

  document.getElementById("search-btn").onclick = search_file;
};

const search_file = () => {
  document.getElementById("file-input").onchange = (ev) => {
    const file = ev.target.files[0];

    if (file) {

      const reader = new FileReader();
      reader.onload = function (e) {
        token = e.target.result; 
        document.getElementById("txt-input").value = e.target.result;
      };
      reader.readAsText(file); 
    }
  };
  document.getElementById("file-input").click();
};
