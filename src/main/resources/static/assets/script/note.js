document.addEventListener('DOMContentLoaded', function () {
    Note.initNote();
    initEvent();
});

let noteDto = {
    name: "",
    contact: "",
    cnt: 0,
    type: "C",
    addr: "",
    use_yn: "N",
}

let Note = {
    dto: noteDto,
    initNote: function () {
        Note.dto.name = "";
        Note.dto.contact = "";
        Note.dto.cnt = 0;
        Note.dto.type = "C";
        Note.dto.addr = "";
        Note.dto.use_yn = "N";
    },
    setNote: function (name, contact, cnt, type, addr) {
        this.dto.name = name;
        this.dto.contact = contact;
        this.dto.cnt = cnt;
        this.dto.type = type;
        this.dto.addr = addr;
        this.dto.use_yn = "Y";
    },
    applyNote: function () {
        let _name = $("#name").val();
        let _contact = $("#contact").val();
        let _cnt = $("input[name='cnt']:checked").val();
        let _type = $("input[name='delivery_method']:checked").val();
        let _addr = $("#addr").text();

        this.setNote(_name, _contact, _cnt, _type, _addr);
        this.applyNoteAjax();
    },
    applyNoteAjax: function () {
        $.ajax({
            url: '/note/apply',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(this.dto),
            success: function (response) {
                debugger;
                Note.alertMsg(response);
            },
            error: function () {
                Note.alertMsg('오류 발생.');
            },
            complete: function () {
                Note.initNote();
            }
        });
    },
    alertMsg: function (msg) {
        alert(msg);
    }
};

function initEvent() {
    $("#noteApply").on("click", function () {
        Note.applyNote();
    })
}