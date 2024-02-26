import React from 'react'

const BookedRooms = () => {
  return (
    <div>
      <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Choose your package</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupSelect01">Room Type</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">Single Bed</option>
                  <option value="2">Premium Single Bed </option>
                  <option value="3">Double Bed</option>
                  <option value="3">Tripple Bed</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupSelect01">Room Qantity</label>
                <input className="form-control" id="inputGroupSelect01" placeholder='1,2,3, or more' />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectedDate">Date</label>
                <input type="text" className="form-control datepicker" id="selectedDate" />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="selectedTime">Time</label>
                <input type="text" className="form-control timepicker" id="selectedTime" />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone No.</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BookedRooms
