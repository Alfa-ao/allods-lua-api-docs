## EVENT_TUTORIAL_REQUEST
### Описание
```
EVENT_TUTORIAL_REQUEST
```
Событие присылается при инициировании показа обучения.

### Список параметров
- **`id`** (`TutorialId`(`ResourceId`)) - Идентификатор обучения.

---

## EVENT_TUTORIAL_SEARCH_RESULT
### Описание
```
EVENT_TUTORIAL_SEARCH_RESULT
```
Событие присылается при выдаче результатов поиска обучения. Результат вызова tutorialLib.SearchTutorial( request ).(HELP)

### Список параметров
- **`id`** (`TutorialId`(`ResourceId`)) - Идентификатор обучения.
- **`request`** (`WString`) - Исходный запрос.
- **`tutorials`** (`table` of `TutorialId`) - Список идентификаторов обучения, удовлетворяющих запросу.
- **`categories`** (`table` of `TutorialCategoryId`) - Список идентификаторов категорий обучения, удовлетворяющих запросу.