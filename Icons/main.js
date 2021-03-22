// MILESTONE 1
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

icons.forEach((item) => {
  $('#icons').append(`<div><i class = "${item.family} ${item.prefix}${item.name}"></i><h4>${item.name}</h4></div>`)
});


// MILESTONE 2
const colors = ['blue', 'orange', 'purple'];
icons.forEach((item, i) => {
  if (item.type == 'animal') {
    $('#icons div').eq(i).addClass(colors[0]);
  } else if (item.type == 'vegetable') {
    $('#icons div').eq(i).addClass(colors[1]);
  } else {
    $('#icons div').eq(i).addClass(colors[2]);
  }
});


let select = $('.filter select');
select.click(() => {
  let value = select.val();
  if (value == 'animal') {
    $('#icons div.blue').show();
    $('#icons div.orange, #icons div.purple').hide();
  } else if (value == 'vegetable') {
    $('#icons div.orange').show();
    $('#icons div.blue, #icons div.purple').hide();
  } else if (value == 'user') {
    $('#icons div.purple').show();
    $('#icons div.blue, #icons div.orange').hide();
  } else {
    $('#icons div').show();
  }
});
