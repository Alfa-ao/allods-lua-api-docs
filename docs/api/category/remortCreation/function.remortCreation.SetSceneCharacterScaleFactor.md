# remortCreation.SetSceneCharacterScaleFactor

Выставляет коэффициент масштабирования для выбранного персонажа в сцене.

## Описание

```lua
remortCreation.SetSceneCharacterScaleFactor( characterId: ObjectId, scale: number )
```

Функция устанавливает коэффициент масштабирования для указанного персонажа (основного, дополнительного из трио или питомца) в текущей сцене.

## Список параметров

- **`characterId`** (`ObjectId`) - Идентификатор персонажа в сцене.

- **`scale`** (`number`) - Коэффициент масштабирования для персонажа.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка масштаба персонажа

```lua
remortCreation.SetSceneCharacterScaleFactor( primaryCharacterId, 1.5 )
```