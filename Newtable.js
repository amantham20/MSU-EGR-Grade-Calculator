$(document).ready(function() {
    var t = 0;
    $("#remove_sem").click(function() {
        $(".sem")[t].remove();
        t--;
    })

    $("#add_sem").click(function() {
        t++;
        $(".Semesters")[0].insertAdjacentHTML('beforeend',
            `
                            <div id="sem${t+1}" class="sem">
<h2>Semester${t+1}</h2>
<table class="table table-condensed" id="tab_logic">
    <thead>
        <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Course Number</th>
            <th>GPA</th>
            <th>Credits</th>
        </tr>
    </thead>
    <tbody>
        <tr id="nmr0">
            <td>
                1
            </td>
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
        </tr>

    </tbody>
</table>
<p></p>
<input type="submit" id="add_row" class="btn btn-primary btn-lg pull-left" value="Add Course">
<input type="submit" id="remove_row" value="Remove Course">

<h2>sem GPA:</h2>
<h2>sem Credits:</h2>

</div>`);
    });

});