import { TextField, Button } from "@mui/material";
import "./AddingBook.css";
const AddingBook = () => {
  return (
    <div className="addingbook">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="frame-container">
            <div className="hello-user-parent">
              <div className="hello-user">Hello, User</div>
              <div className="frame-child" />
              <div className="add-books">Add Books</div>
              <div className="catalogue-info">Catalogue info</div>
            </div>
            <div className="frame-wrapper">
              <div className="cat-no-parent">
                <div className="cat-no">
                  <div className="cat-no1">Cat No.</div>
                  <TextField
                    className="input-cat-no"
                    sx={{ width: 187 }}
                    color="primary"
                    variant="outlined"
                    type="number"
                    name="Cat No."
                    label="Enter here"
                    placeholder="Digits only"
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
                <div className="title-parent">
                  <div className="cat-no">
                    <div className="cat-no1">Title</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 187 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Title"
                      label="Title of Book"
                      //placeholder="Placeholder"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">Subtitle</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 187 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Subtitle"
                      label="Subtitle"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">Publisher</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 187 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Publisher"
                      label="Publisher"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">Year</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 90 }}
                      color="primary"
                      variant="outlined"
                      type="number"
                      name="Year"
                      label="Year"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                </div>
                <div className="title-parent">
                  <div className="cat-no">
                    <div className="cat-no1">Author-1</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 150 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Author"
                      label="Author"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <TextField
                    className="author-2"
                    color="primary"
                    variant="outlined"
                    type="text"
                    name="Author"
                    label="Author-2"
                    size="medium"
                    margin="none"
                  />
                  <div className="cat-no">
                    <div className="cat-no1">Place</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 120 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Place"
                      label="Place"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">Subject</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 150 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Subject"
                      label="Subject"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                </div>
                <div className="title-parent">
                  <div className="cat-no">
                    <div className="cat-no1">Country</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 150 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Country"
                      label="Country"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">User Code</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 150 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      name="Usr Code"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                  <div className="cat-no">
                    <div className="cat-no1">Date Added</div>
                    <TextField
                      className="input-title"
                      sx={{ width: 150 }}
                      color="primary"
                      variant="outlined"
                      type="date"
                      name="Add Date"
                      size="medium"
                      margin="none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aquisition-info-parent">
            <div className="aquisition-info">Aquisition info</div>
            <div className="frame-div">
              <div className="cat-no-group">
                <div className="cat-no">
                  <div className="cat-no1">Cat No.</div>
                  <TextField
                    className="input-title"
                    sx={{ width: 150 }}
                    color="primary"
                    variant="outlined"
                    type="number"
                    name="Cat No."
                    label="Cat No."
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
                <div className="cat-no">
                  <div className="cat-no1">Acq ID</div>
                  <TextField
                    className="input-title"
                    sx={{ width: 150 }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    name="Acq ID"
                    label="Acq ID"
                    placeholder="Placeholder"
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
                <div className="cat-no">
                  <div className="cat-no1">Library</div>
                  <TextField
                    className="input-title"
                    sx={{ width: 150 }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    name="Library"
                    label="Library"
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="aquisition-info-parent">
            <div className="aquisition-info">Holding Info</div>
            <div className="frame-wrapper1">
              <div className="hold-no-parent">
                <div className="cat-no">
                  <div className="cat-no1">Hold No.</div>
                  <TextField
                    className="input-title"
                    sx={{ width: 150 }}
                    color="primary"
                    variant="outlined"
                    type="number"
                    name="Hold No."
                    label="Hold No."
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
                <div className="cat-no">
                  <div className="cat-no1">Acq ID</div>
                  <TextField
                    className="input-title"
                    sx={{ width: 150 }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    name="Acq ID"
                    label="Acq ID"
                    size="medium"
                    margin="none"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="update-btn"
          sx={{ width: 123 }}
          variant="contained"
          name="Update Btn"
          color="primary"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default AddingBook;