model= {
	img: ['img/snow.jpg', 'img/mermaid.jpg', 'img/lake.jpg']
};

octopus= {
	init: function(){
		view.init();
	},
	getImg: function(){
		return model.img;
	}
}

view = {
	init:function(){
		this.shuffleImg();
	},
	shuffleImg: function(){
		let images = octopus.getImg();
		let length = images.length-1;
		let i = 0;
		setInterval(function(){ 
			if(i>=3) {
				i = 0
			}
			let div = document.querySelector('.banner');
			div.innerHTML = '';
			div.innerHTML = '<img class="fade" src="'+images[i]+'">';
			i++;
		}, 6000);
	}
}
octopus.init();