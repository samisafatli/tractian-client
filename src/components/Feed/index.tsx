import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Asset from '../Asset';
//import Asset from '../Asset';

const Feed = () => {
   let [feed, setFeed] = useState<any>([])

   useEffect(() => {
      axios.get('http://localhost:7676/assets')
      .then(response => response)
      .then(data => { return setFeed(data.data); })
   }, [])

   console.log(feed)
   return (
      <div>
         {feed.map((asset: any) => {
            return (
               <Asset
                  image={asset.image}
                  name={asset.name}
                  description={asset.description}
                  model={asset.model}
                  owner={asset.owner}
                  status={asset.status}
                  healthLevel={asset.healthLevel}
               />
            )
         })}
      </div>
   )
}

export default Feed;