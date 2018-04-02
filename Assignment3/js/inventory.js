var itemTitle=[
    'Stapler',
    'Pen',
    'Screwdriver',
    'Knife',
    'Pistol',
    'Health',
    'Power',
    'Muffin',
    'Burger',
    'Sushi'
];
var itemDescription=[
    'The most dangerous thing in any office',
    'It is mightier than the sword',
    'Not only for handyman',
    'Slice Slice Slice',
    'Bang Bang Bang Clic Clic',
    'Epson salts are really great',
    'Looks like cotton candy',
    'Can you guess what was baked into this?',
    'It is not only two burgers, special sauce, lettuce..',
    'Why raw stuff takes so much work to make?'
];

var selectInventoryItem = function(){
    var itemNumber = parseInt(this.getAttribute('itemId'));
    removeOverlay('selectedItemOverlay');
    printOverlay('selectedItemOverlay', this.childNodes);
    document.getElementById('inventoryItemName').innerHTML = itemTitle[itemNumber]+': ';
    document.getElementById('inventoryItemDescription').innerHTML = itemDescription[itemNumber];
};

var inventorySelectionAction = document.getElementsByClassName('item');
for(var isa = 0; isa < inventorySelectionAction.length; isa++){
    inventorySelectionAction[isa].addEventListener('click',selectInventoryItem);
}


document.getElementById('btnBackInventoryPauseMenu').addEventListener('click',function(){
    transitionScene('inventory', 'pauseMenu');
});
