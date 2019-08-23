import React, { Component } from 'react'

class Registry extends Component {
  render() {
    return (
        <div className="main-content">
          <h1 className="cursive heading">Our Registry</h1>
          <img className="eucalyptus" src={process.env.PUBLIC_URL + '/images/eucalyptus.png'} />
          <div className="registry-icons">
            <a target="_blank" href="https://www.williams-sonoma.com/registry/500175007/registry-list.html?cm_ven=WedCh&bnrid=3117550&cm_ite=GiftGiver&cm_pla=WCSearchResults&cm_cat=Registry">
            <img className="logo" src={process.env.PUBLIC_URL + '/images/williams_sonoma_logo.png'} /></a>
            <a target="_blank" href="https://www.target.com/gift-registry/giftgiver?registryId=868a2155b19b47a4839eb419dd0a3a13&type=WEDDING&clkid=92fb3f4cN5d6511e98ec20e0b2e3dc41d&lnm=81938&afid=The%20Knot%2C%20Inc%20and%20Subsidiaries&ref=tgt_adv_xasd0002">
            <img className="logo" src={process.env.PUBLIC_URL + '/images/Target_Logo.png'} /></a>
          </div>
        </div>
    )
  }
}

export default Registry
