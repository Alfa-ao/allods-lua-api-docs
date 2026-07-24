# remortCreation.SetSceneCharacterMouseRotation

Поворачивает выбранного персонажа в сцене при помощи мыши.

## Описание

```lua
remortCreation.SetSceneCharacterMouseRotation( characterId: ObjectId )
```

Функция включает поворот выбранного персонажа в сцене при помощи мыши. Под выбранным персонажем понимается основной или дополнительный персонаж из трио, включая питомца.

::: warning Замечание
Функция реализована на стороне UI.
:::

## Список параметров

- **`characterId`** (`ObjectId`) - Идентификатор персонажа в сцене.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Включение поворота персонажа мышью

```lua
remortCreation.SetSceneCharacterMouseRotation( primaryCharacterId )
```