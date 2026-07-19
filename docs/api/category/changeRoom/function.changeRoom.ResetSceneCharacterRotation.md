# changeRoom.ResetSceneCharacterRotation
Сбрасывает вращение выбранного персонажа в сцене главного меню.

## Описание
```lua
changeRoom.ResetSceneCharacterRotation( characterId: ObjectId )
```
Функция сбрасывает вращение выбранного персонажа (основного или дополнительного из трио, включая питомца) в сцене главного меню.

## Список параметров
- **`characterId`** (`ObjectId`)
Идентификатор персонажа в сцене.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Сброс вращения основного персонажа
```lua
changeRoom.ResetSceneCharacterRotation( primaryCharacterId )
```