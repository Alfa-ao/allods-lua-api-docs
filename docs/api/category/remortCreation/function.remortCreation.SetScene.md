# remortCreation.SetScene
Создает сцену для работы с персонажами для указанного `Control3DSafe`.

## Описание

```lua
remortCreation.SetScene( wtControl3D, sceneName )
```
Одновременно в разных аддонах может быть только одна сцена. Если сцена уже была в другом контроле, она автоматически убирается из него.

Сцены выбираются по имени из списка `characterScenes` в `\Interface\System\CharacterScenes.(UICharacterScenes).xdb`. Каждая сцена представлена картой и точками расположения и поворотами персонажа и камеры.

## Список параметров

- **`wtControl3D`** (`Control3DSafe`) - Контрол, для которого создается сцена.

- **`sceneName`** (`string`) - Имя сцены.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Создание сцены
```lua
remortCreation.SetScene( wtControl3D, "coolScene" )
```