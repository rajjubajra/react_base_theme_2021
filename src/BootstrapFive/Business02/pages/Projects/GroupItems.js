import React, { useState, useEffect } from 'react';
import GroupItem from './GroupItem';
import { useSelector } from 'react-redux';
import './GroupItems.scss';





const data = [
  {
    id: 0,
    itemTitle: "Orchid",
    itemBrief: "Style Hundred",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/orchid-3097458_640.jpg",
    itemGroup: 'orchid'
  },
  {
    id: 1,
    itemTitle: "Tulip",
    itemBrief: "230UTSC",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/pink-2254970_6.jpg",
    itemGroup: 'tulip'
  },
  {
    id: 2,
    itemTitle: "Orchid",
    itemBrief: "900TGG",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/flower-4725816_640.jpg",
    itemGroup: 'orchid'
  },
  {
    id: 3,
    itemTitle: "Tulip",
    itemBrief: "100TWZ",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/tulips-1083572_640.jpg",
    itemGroup: 'tulip'
  },
  {
    id: 4,
    itemTitle: "Coming soon",
    itemBrief: "300FTF",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/orchid-4876192_640.jpg",
    itemGroup: 'orchid'
  },
  {
    id: 5,
    itemTitle: "Food Three",
    itemBrief: "Shirt 700",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/tulips-3406530_640.jpg",
    itemGroup: 'tulip'
  },
  {
    id: 6,
    itemTitle: "Japanese Garden",
    itemBrief: "SDF0090DF",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/japanese-lamp-2243881_640.jpg",
    itemGroup: 'japanese'
  },
  {
    id: 7,
    itemTitle: "Coming Soon",
    itemBrief: "Style 700",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/water-1912606_640.jpg",
    itemGroup: 'upcoming'
  },
  {
    id: 8,
    itemTitle: "Japanese Garden",
    itemBrief: "Style 300HD",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/feng-shui-167816_640.jpg",
    itemGroup: 'japanese'
  },
  {
    id: 9,
    itemTitle: "Japanese Garden",
    itemBrief: "TZO 900",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/japanese-garden-437289_640.jpg",
    itemGroup: 'japanese'
  },
  {
    id: 10,
    itemTitle: "Coming Soon",
    itemBrief: "Style Hundred",
    itemImg: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/orchid-3178759_640.jpg",
    itemGroup: 'upcoming'
  },

]




function GroupItems() {

  const [viewData, setViewData] = useState(data);



  const groupname = useSelector(state => state.reducerSelectGroup.groupname);

  //  console.log('groupname', groupname);

  useEffect(() => {
    // setViewData(data.map(item => {
    //   return groupname === 'all'
    //     ? { ...item }
    //     : item.itemGroup !== groupname ? { ...item, itemGroup: 'd-none' } : item
    // })
    // );
    groupname === 'all'
      ? setViewData(data)
      : setViewData(data.filter(item => {
        return groupname === item.itemGroup
      }))


  }, [groupname, viewData])

  let delay = 0;



  return (
    <div className="row">
      {
        viewData.map((item, index) => {
          return (
            <GroupItem
              key={index}
              itemTitle={item.itemTitle}
              itemBrief={item.itemBrief}
              itemImg={item.itemImg}
              itemGroup={item.itemGroup}
              delay={item.itemGroup !== 'd-none' ? ++delay : ''}
            />
          )
        })
      }
    </div>
  )
}

export default GroupItems
