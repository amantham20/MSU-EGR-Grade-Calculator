$(document).ready(function() {
    var i = 0;
    $("#remove_row").click(function() {
        $("tbody tr")[i].remove();
        i--;
    });

    // $(".rowDel").click(function() {
    //     var a = $(".rowDel").id;
    //     $("tbody tr ").remove();

    // });

    function deleteThisBidi(r) {
        $("tbody tr #" + r).remove();
    }



    $(".add_row").click(function() {
        i++;
        $('tbody')[0].insertAdjacentHTML('beforeend', `      
          <tr id="nmr${i}">
      <td>${i+1}</td>
      <td>
                        <select name="subject" class="form-control">
                      <option selected disabled value="">-Select An Option-</option>
                      <option value="select a course">select a course</option>
                      <option value="select a course">select a course1</option>
                      <option value="select a course">select a course2</option>
                      <option value="select a course">select a course3</option>
                  </select>
                    </td>
                    <td>
                        <select name="courseNumber" class="form-control">
                      <option selected disabled value="">-Select An Course-</option>
                      <option value="select a course">select a course</option>
        <option value="select a course">select a course1</option>
        <option value="select a course">select a course2</option>
        <option value="select a course">select a course3</option>
                  </select>
                    </td>
                    <td>
                    <select name="GPA" id="gpa" class="form-control">
                    <option value="select a course" data-gpaValue="4.0">4.0</option>
                    <option value="select a course" data-gpaValue="3.5">3.5</option>
                    <option value="select a course" data-gpaValue="3.0">3.0</option>
                    <option value="select a course" data-gpaValue="2.5">2.5</option>
                    <option value="select a course" data-gpaValue="2.0">2.0</option>
                    <option value="select a course" data-gpaValue="1.0">1.5</option>
                    <option value="select a course" data-gpaValue="1.0">1.0</option>
                    <option value="select a course" data-gpaValue="0.0">0.0</option>
                </select>
                </td>
                <td>
                    <select name="Credits" id="credits" class="form-control">
                    <option value="select a course" data-creditValue="4">4</option>
                    <option value="select a course" data-creditValue="3">3</option>
                    <option value="select a course" data-creditValue="2">2</option>
                    <option value="select a course" data-creditValue="1">1</option>
                    <option value="select a course" data-creditValue="0">NC</option>
                </select>
                </td>
                <td>
                 
                 <button id="rowDel${i+1}" onClick="deleteThisBidi(this.id)" class="rowDel">delete</button>
            </td>
                </tr>`);
        //<input type="submit" id="rowDel${i+1}" onClick="deleteThisBidi(this.id)" class="rowDel" value="Delete">
    });
});