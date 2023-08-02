const input = [
  {
    key: "x",
    value: 2,
  },
  {
    a: 1
  },
  {
    a: 1
  },
  {
    key: "x",
    value: 3,
  },
  {
    key: "x",
    value: 3,
  },
  {
    key: "x",
    value: 2,
    children: [
      {
        key: "x",
        value: 2,
        children: [],
      },
      {
        key: "x",
        value: 5,
        children: [],
      },
      {
        key: "x",
        value: 2,
        children: [],
      },
    ],
  },
];

const unique = (arr) => {
    const res = [...new Set(arr)]
    return res.map(item => Array.isArray(item) ? unique(item): item )
}

const arr = [1, 2,3, 3, [4, 5, 5, [6, 7, 6]]]

console.log(unique(arr))

function deduplicate(arr) {
    const map = new Map();
  
    function traverse(obj) {
      const { key, value, children } = obj;
      const objKey = `${key}-${value}`;
      if (!map.has(objKey)) {
        map.set(objKey, true);
        const newObj = { key, value };
        if (children && children.length > 0) {
          newObj.children = children.map(traverse);
        }
        return newObj;
      }
    }
  
    return arr.map(traverse).filter((obj) => obj !== undefined);
  }

console.log(deduplicate(input))