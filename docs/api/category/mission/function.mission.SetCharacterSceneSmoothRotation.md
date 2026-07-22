# mission.SetCharacterSceneSmoothRotation

Управляет плавностью анимации поворота модели персонажа в трехмерных сценах.

## Описание

```lua
mission.SetCharacterSceneSmoothRotation( index: number, isSmooth: boolean )
```

Функция задает режим анимации поворота модели персонажа в трехмерных сценах, таких как окно персонажа, итем-мол или конюшня. При значении `true` поворот происходит плавно, при `false` - моментально и без анимации.

## Список параметров

- **`index`** (`number`) - Индекс сцены, принимает значения от `0` до `GetMaxCharacterSceneCount() - 1`.

- **`isSmooth`** (`boolean`) - Флаг плавности поворота. Если `true`, поворот персонажа в 3D-сцене выполняется с анимацией.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Отключение плавного поворота

```lua
local index = 0
mission.SetCharacterSceneSmoothRotation( index, false )
```

## Смотрите также

- [GetMaxCharacterSceneCount](function.mission.GetMaxCharacterSceneCount)