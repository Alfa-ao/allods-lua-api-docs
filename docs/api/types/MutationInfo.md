# MutationInfo

Информация о мутации, распространяемой игровым объектом, например стеллой в Хантинг Граундах

Таблица, имеющая следующие поля:

```
difficulty: number (enum ZONE_TIER_DIFFICULTY_...) - сложность игровой зоны(мутации)
population: number [0..100] - заполненность зоны мутации, задается в целых процентах, определяется как соотношение текущего количества игроков в зоне к предельному
buffId: BuffId - идентификатор ресурса бафа, накладываемого на персонажей в зоне мутации
```

## Пример

```lua
local trackInfo = objects.GetTrackInfo( trackId )
if trackInfo and trackInfo.mutation then
    local buffInfo = object.GetBuffInfo( trackInfo.mutation.buff )
end
```

## Смотрите также

- [ZONE_TIER_DIFFICULTY_*](/api/constants/constants.ZONE_TIER_DIFFICULTY.md)