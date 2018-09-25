package org.premiership.model;

import java.util.List;
import java.util.Map;

public class Round {
    private Integer round;
    private List<Map<String, Integer>> matches;

    public Round() {
    }

    public Round(Integer round, List<Map<String, Integer>> matches) {
        this.round = round;
        this.matches = matches;
    }

    public Integer getRound() {
        return round;
    }

    public void setRound(Integer round) {
        this.round = round;
    }

    public List<Map<String, Integer>> getMatches() {
        return matches;
    }

    public void setMatches(List<Map<String, Integer>> matches) {
        this.matches = matches;
    }

    @Override
    public String toString() {
        return "Round{" +
                "round=" + round +
                ", matches=" + matches +
                '}';
    }
}
