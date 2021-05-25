var select = document.querySelector('.paragraph-select');
var paragraphList = document.querySelector('.paragraph-list');
var addParagraphBtn = document.querySelector('.paragraph-list--Btn');
var form = document.querySelector('form');
var briefing = document.querySelector('#briefing');

function makeParagraph(title) {
  return '<div class="paragraph-list__item">' + '\n'
          + '<label class="form-label"  for=paragraph-title ></label>'
          + '<input class="form-control paragraph-item__title" id="paragraph-title" name="paragraph-title" type="text" value=' + title +' readonly="readonly" >' + '\n'
          + '<label class="form-label" for=paragraph-conetent ></label>'
          + '<textarea class="form-control paragraph-item__content" id=paragraph-content name=paragraph-content  > </textarea>' + '\n'
        + '</div>'
}

briefing.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    e.stopPropagation();
  }
})

addParagraphBtn.addEventListener('click', function(e) {
  var title = select.options[select.selectedIndex].value;  
  paragraphList.insertAdjacentHTML('beforeend', makeParagraph(title));
})

paragraphList.addEventListener('dblclick', function(e) {
  var paragraphTitle = e.target.closest('#paragraph-title');
  if (!paragraphTitle) return;
  console.log('dblclick')
  paragraphTitle.readOnly = false;
})

paragraphList.addEventListener('keydown', function(e) {
  e.stopPropagation();
  if (e.target.classList.contains('paragraph-item__title') && e.keyCode === 13) {
    e.preventDefault();
    e.target.readOnly = true;
  }
})

paragraphList.addEventListener('focusout', function(e) {
  var paragraphTitle = e.target.closest('#paragraph-title');
  if (!paragraphTitle) return ;
  paragraphTitle.readOnly = true;
})

form.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) e.preventDefault();

})
