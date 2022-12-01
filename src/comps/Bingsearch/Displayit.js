import React from 'react'
import ReactPlayer from 'react-player';
function Displayit({ searchimages, searchvideos, searchall, searchType }) {
  return (
    <>
      {
        searchimages.length && searchvideos.length && searchall.length !== 0 ? (
          <div id="displayImagesFoundation">

            {searchType === "Videos" ? (
              searchvideos.map((elements, index) => {
                return (
                  <div key={index}>
                    <ReactPlayer
                      url={elements.contentUrl}
                      alt="images"
                      fluid={false}
                      width="full"
                    />
                  </div>
                );
              })
            ) :<></>
            }

            {searchType === "Images" ? (
              searchimages.map((elements, index) => {
                return (
                  <div key={index}>
                    <img
                      src={elements.thumbnailUrl}
                      alt="images"
                      className="w-full"
                    />
                  </div>
                );
              })
            ) :<></>
            }

            {
              searchType==='All'?(
                searchall.map((elements, index) => {
                  return (
                    <div key={index} className="w-full">
                      <a target="_blank" rel="noopener noreferrer" href={elements.url} id='searchallName' className="hover:underline">{elements.name}</a>
                      <h4 target="_blank" rel="noopener noreferrer" id='searchallUrl'>{elements.url} </h4>
                      <p target="_blank" rel="noopener noreferrer" id='searchallSnippet'>{elements.snippet}</p>
                    </div>
                  );
                })
              ):<></>
            }
          
          </div>
        ) : <></>
      }
      
    </>
  );
}

export default Displayit