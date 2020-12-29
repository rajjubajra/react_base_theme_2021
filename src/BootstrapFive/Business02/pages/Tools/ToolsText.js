import React from 'react'



function ToolsText() {

  const beforeContent = " Auam llitia pariat";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: [
          '.add-before:before {',
          '  content: "' + beforeContent + '";',
          'font-size: 2em;',
          ' text-align: center;',
          ' width: 150px;',
          ' height: 200px;',
          ' position: absolute;',
          ' left: -80px;',
          'top: 60px;',
          ' background: #666;',
          'outline: 1px solid #ffffff70;',
          'outline-offset: -10px;',
          'padding: 15px;',
          '}'
        ].join('\n')
      }}></style>
      <div className="card w-75">
        <div
          style={{ paddingLeft: "100px", position: "relative", minHeight: "350px" }}
          className="card-body add-before">

          <div className="card-title">Tools</div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus magni itaque, rerum nisi laboriosam eaque omnis! Sunt voluptates sint quam iusto mollitia pariatur, nisi possimus delectus quisquam aut quibusdam.
          </div>
          <div className="card-text">
            <i>Tel: 4444 5555 6666</i>
          </div>
          <button className="btn btn-primary" variant="primary">Contact</button>
        </div>
      </div>
    </>
  )
}

export default ToolsText

/**
 *   <div class="tool-text-area">
      <div class="d-flex flex-row years-area">
        <h2 class="p-3 years">10</h2>
        <h2>
          <span>Years</span>
          <span>Experience</span>
          <span>Working</span>
        </h2>
      </div>
      <div class="d-flex flex-row flex-wrap call-area">
        <span><FontAwesomeIcon className="m-2" icon={faPhone} /></span>
        <div class="call-now">
          <h4>Call Now</h4>
          <span class="font-roboto py-2">(+44)-000-000-0000</span>
        </div>
      </div>
      <div class="bg-panel"></div>
    </div>
 */