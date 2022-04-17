import TreeNode from './components/tree-node';

function App() {

  const data = [
    {
      "id": 1,
      "title": "SIEMENS ENERGY",
      "astClass": "COMPANY",
      "desig": "Siemens Energy",
      "parentName": "Company",
      "parentId": 0,
      "criticalScore": 0,
      "equipActive": false,
      "equipId": 0,
      "activeStatus": true,
      "level": 0,
      "plantObjId": 0,
      "plantId": 1,
      "desigLocal": "null",
      "children": [
        {
          "id": 15232,
          "title": "REGION OM",
          "astClass": "REGION",
          "desig": "Region OM",
          "parentName": "SIEMENS ENERGY",
          "parentId": 1,
          "criticalScore": 0,
          "equipActive": false,
          "equipId": 0,
          "activeStatus": true,
          "level": 1,
          "plantObjId": 0,
          "plantId": 15232,
          "desigLocal": "null",
          "children": [
            {
              "id": 2,
              "title": "LAN",
              "astClass": "PLANT",
              "desig": "LandRover",
              "parentName": "REGION OM",
              "parentId": 15232,
              "criticalScore": 0,
              "equipActive": false,
              "equipId": 0,
              "activeStatus": true,
              "level": 2,
              "plantObjId": 0,
              "plantId": 2,
              "desigLocal": "null",
              "children": [
                {
                  "id": 3,
                  "title": "UNIT 00",
                  "astClass": "UNIT",
                  "desig": "Unit 00",
                  "parentName": "LAN",
                  "parentId": 2,
                  "criticalScore": 0,
                  "equipActive": false,
                  "equipId": 0,
                  "activeStatus": true,
                  "level": 3,
                  "plantObjId": 0,
                  "plantId": 2,
                  "desigLocal": "null",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 15233,
          "title": "Reg South",
          "astClass": "REGION",
          "desig": "REGION SOUTH",
          "parentName": "SIEMENS ENERGY",
          "parentId": 1,
          "criticalScore": 0,
          "equipActive": false,
          "equipId": 0,
          "activeStatus": true,
          "level": 1,
          "plantObjId": 0,
          "plantId": 15233,
          "desigLocal": "null",
          "children": [
            {
              "id": 15234,
              "title": "Greenland",
              "astClass": "PLANT",
              "desig": "GREEN LAND",
              "parentName": "Reg South",
              "parentId": 15233,
              "criticalScore": 0,
              "equipActive": false,
              "equipId": 0,
              "activeStatus": true,
              "level": 2,
              "plantObjId": 0,
              "plantId": 15234,
              "desigLocal": "null",
              "children": [
                {
                  "id": 15235,
                  "title": "Unit 1",
                  "astClass": "UNIT",
                  "desig": "UNIT 1",
                  "parentName": "Greenland",
                  "parentId": 15234,
                  "criticalScore": 0,
                  "equipActive": false,
                  "equipId": 0,
                  "activeStatus": true,
                  "level": 3,
                  "plantObjId": 0,
                  "plantId": 15234,
                  "desigLocal": "null",
                  "children": []
                },
                {
                  "id": 15249,
                  "title": "Unit 2",
                  "astClass": "UNIT",
                  "desig": "UNIT 2",
                  "parentName": "Greenland",
                  "parentId": 15234,
                  "criticalScore": 0,
                  "equipActive": false,
                  "equipId": 0,
                  "activeStatus": true,
                  "level": 3,
                  "plantObjId": 0,
                  "plantId": 15234,
                  "desigLocal": "null",
                  "children": []
                }
              ]
            },
            {
              "id": 15320,
              "title": "Little Creek",
              "astClass": "PLANT",
              "desig": "LITTLE CREEK",
              "parentName": "Reg South",
              "parentId": 15233,
              "criticalScore": 0,
              "equipActive": false,
              "equipId": 0,
              "activeStatus": true,
              "level": 2,
              "plantObjId": 0,
              "plantId": 15320,
              "desigLocal": "null",
              "children": [
                {
                  "id": 15321,
                  "title": "Unit 1",
                  "astClass": "UNIT",
                  "desig": "UNIT 1",
                  "parentName": "Little Creek",
                  "parentId": 15320,
                  "criticalScore": 0,
                  "equipActive": false,
                  "equipId": 0,
                  "activeStatus": true,
                  "level": 3,
                  "plantObjId": 0,
                  "plantId": 15320,
                  "desigLocal": "null",
                  "children": []
                }
              ]
            }
          ]
        },
      ]
    }
  ]

  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-full">
        <div className="flex-none w-64 bg-blue-200">
        <TreeNode data={data}/>
        </div>
        <div className="flex-grow bg-red-200"></div>
      </div>
    </div>
  )
}

export default App
