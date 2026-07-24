# remortCreation.RotateSceneCharacter

Поворачивает указанного персонажа в сцене.

## Описание

```lua
remortCreation.RotateSceneCharacter( characterId: ObjectId, angle: number )
```

Функция поворачивает выбранного персонажа (основного или дополнительного из трио, включая питомца) в сцене на заданный угол.

::: warning Замечание
Функция реализована на стороне пользовательского интерфейса.
:::

## Список параметров

- **`characterId`** (`ObjectId`) - Идентификатор персонажа в сцене.

- **`angle`** (`number`) - Угол поворота в градусах.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Поворот персонажа

```lua
remortCreation.RotateSceneCharacter( primaryCharacterId, 20 )
```