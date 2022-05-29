const dataItems = {
  "items": [
    {
      "title": "Item 1",
      "items": [
        {
          "title": "Item 1.1",
          "items": [
            {
              "title": "Item 1.1.1",
              "items": []
            },
            {
              "title": "Item 1.1.2",
              "items": []
            }
          ]
        },
        {
          "title": "Item 1.2",
          "items": [
            {
              "title": "Item 1.2.1",
              "items": []
            },
          ]
        }
      ]
    },
    {
      "title": "Item 2",
      "items": [
        {
          "title": "Item 2.1",
          "items": []
        },
        {
          "title": "Item 2.2",
          "items": []
        }
      ]
    },
    {
      "title": "Item 3",
      "items": [
        {
          "title": "Item 3.1",
          "items": []
        },
        {
          "title": "Item 3.2",
          "items": [
            {
              "title": "Item 3.2.1",
              "items": []
            }
          ]
        }
      ]
    }
  ]
};

const TabComponent = ({ title, items }) => {
  const hasChildren = items && items.length
  console.log(title);
  return (
    <>
      <div className='tab'>
        <span>{title}</span>
      </div>
      <div className='margin-left-10'>
        <TabsComponent items={items} />
      </div>
    </>
  )
};

const TabsComponent = ({ items }) => {
  const hasChildren = items && items.length > 0;
  console.log(items);
  return (
    <>
      {hasChildren && items.map((item) => (
        <TabComponent title={item.title} items={item.items} />
      ))}
    </>
  )
};

function App() {
  return (
    <div className="App">
      <div className='tabs-container'>
        <div>
          <TabsComponent items={dataItems.items} />
        </div>
      </div>
    </div>
  );
};

export default App;
