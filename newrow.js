$(document).ready(function() {
    var i = 0;
    $("#remove_row").click(function() {
        $("tbody tr")[i].remove();
        i--;
    })


    $("#add_row").click(function() {
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
                            <option value="select a course">4.0</option>
                            <option value="select a course">3.5</option>
                            <option value="select a course">3.0</option>
                            <option value="select a course">2.5</option>
                            <option value="select a course">2.0</option>
                            <option value="select a course">1.5</option>
                            <option value="select a course">1.0</option>
                            <option value="select a course">0.0</option>
                        </select>
                    </td>
                    <td>
                        <select name="Credits" id="credits" class="form-control">
                            <option value="select a course">4</option>
                            <option value="select a course">3</option>
                            <option value="select a course">2</option>
                            <option value="select a course">1</option>
                        </select>
                    </td>
                </tr>`);
    });
});