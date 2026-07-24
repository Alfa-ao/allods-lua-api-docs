# remortCreation.ResetSceneCharacterRotation

Сбрасывает вращение выбранного персонажа в главном меню.

## Описание

```lua
remortCreation.ResetSceneCharacterRotation( characterId: ObjectId )
```

Функция сбрасывает вращение выбранного персонажа (основного, дополнительного из трио или питомца) в главном меню.

::: warning Замечание
Функция реализована в UI.
:::

## Список параметров

- **`characterId`** (`ObjectId`) - Идентификатор персонажа в сцене.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Сброс вращения основного персонажа

```lua
remortCreation.ResetSceneCharacterRotation( primaryCharacterId )
```