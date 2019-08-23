import React, { Component } from 'react'

class WeddingParty extends Component {
  render() {
    return (
        <div className="wedding-party">
          <div className="main-content">
            <h1 className="cursive heading">Wedding Party</h1>
            <img className="eucalyptus" src={process.env.PUBLIC_URL + '/images/eucalyptus.png'} />


            <div class="divTable">
              <div class="divTableBody">
                <div class="divTableRow">
                  <div class="divTableCell">Sara Wegmann</div>
                  <div class="divTableCell">Maid of Honor</div>
                  <div class="divTableCell">Patrick Weaver</div>
                  <div class="divTableCell">Best Man</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Erin Tierney</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">Jonathon Debolt</div>
                  <div class="divTableCell">Groomsman</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Kaitlin Tierney</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">Nick Estep</div>
                  <div class="divTableCell">Groomsman</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Olivia Davis</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">Weston Sloan</div>
                  <div class="divTableCell">Groomsman</div>
                </div>
                  <div class="divTableRow">
                  <div class="divTableCell">Taylor Schulberg</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">Keith Tyler</div>
                  <div class="divTableCell">Groomsman</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Kasey Fields</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">Luke Humphreys</div>
                  <div class="divTableCell">Groomsman</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Julia Henley</div>
                  <div class="divTableCell">Bridesmaid</div>
                  <div class="divTableCell">James Ryan</div>
                  <div class="divTableCell">Ring Bearer</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Chloe Duncan</div>
                  <div class="divTableCell">Bridesmaid</div>
                </div>
                <div class="divTableRow">
                  <div class="divTableCell">Ashley Boustany</div>
                  <div class="divTableCell">Bridesmaid</div>
                </div>
              </div>
            </div>


          </div>
        </div>
    )
  }
}

export default WeddingParty
